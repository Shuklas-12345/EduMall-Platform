const crypto = require('crypto');
const ConversionService = require('../../core/services/conversion.service');

const handlePaymentWebhook = async (req, res) => {
    const signature = req.headers['x-payment-signature'];
    const secret = process.env.PAYMENT_WEBHOOK_SECRET;

    // FIX: Use 'rawBody' to prevent key-order signature failures
    const rawBody = req.rawBody; 

    if (!rawBody) return res.status(400).send('No body provided');

    const expectedSignature = crypto.createHmac('sha256', secret)
                                    .update(rawBody)
                                    .digest('hex');

    if (signature !== expectedSignature) {
        return res.status(401).json({ error: "INVALID_SIGNATURE" });
    }

    const { leadId, offerId, txnId, event } = JSON.parse(rawBody.toString());

    if (event === 'payment.captured') {
        try {
            await ConversionService.convert(leadId, offerId, txnId);
            res.status(200).send('PROCESSED');
        } catch (err) {
            // If batch is full, the retrying webhook will keep failing until admin fixes it
            res.status(500).send(err.message);
        }
    } else {
        res.status(200).send('IGNORED');
    }
};