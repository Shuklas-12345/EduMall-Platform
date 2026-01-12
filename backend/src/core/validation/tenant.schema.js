const { z } = require('zod');
const sanitizeHtml = require('sanitize-html');

const OnboardingSchema = z.object({
    name: z.string().min(3).trim(),
    slug: z.string().regex(/^[a-z0-9-]+$/).transform(v => v.toLowerCase()),
    appName: z.string().transform(v => sanitizeHtml(v, {
        allowedTags: [],
        allowedAttributes: {}
    }))
});

module.exports = { OnboardingSchema };