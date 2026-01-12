const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');

const headerProtection = helmet();

// FIX: Added 'localhost' support so the Project Executive can test locally
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:3000',
    'http://localhost:5173' // Common for modern React apps
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 500, 
    message: { error: "TOO_MANY_REQUESTS", message: "Too many attempts, please wait 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { headerProtection, corsOptions: cors(corsOptions), limiter };