/**
 * SRS 15.5: Identity-Aware Privacy Gate
 */
class AIScrubber {
    /**
     * @param {string} text - Raw student query
     * @param {string} realName - Decrypted name from 'users' vault
     * @param {string} locationName - Dynamic School/Center name
     */
    scrub(text, realName, locationName) {
        let clean = text;

        // 1. Pattern Scrubbing (Emails/Phones)
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const phoneRegex = /(\+91|0)?\s?\d{10}/g;
        clean = clean.replace(emailRegex, "[REDACTED_EMAIL]");
        clean = clean.replace(phoneRegex, "[REDACTED_PHONE]");

        // 2. Identity & Location Scrubbing
        if (realName && realName !== 'PURGED') {
            const nameRegex = new RegExp(realName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            clean = clean.replace(nameRegex, "[STUDENT_NAME]");
        }
        
        if (locationName) {
            const locRegex = new RegExp(locationName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            clean = clean.replace(locRegex, "[LOCATION]");
        }

        return clean;
    }
}

module.exports = new AIScrubber();