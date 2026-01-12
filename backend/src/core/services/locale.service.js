class LocaleService {
    /**
     * SRS 22.1: Detects the best language
     */
    getBestLanguage(userPreference, browserLangHeader) {
        const supported = ['en', 'hi', 'gu'];
        
        // 1. Highest Priority: User's chosen account setting
        if (userPreference && supported.includes(userPreference)) {
            return userPreference;
        }

        // 2. Secondary: Browser detection (Accept-Language header)
        if (browserLangHeader) {
            // Extract 'en' from 'en-US,en;q=0.9'
            const detected = browserLangHeader.split(',')[0].substring(0, 2).toLowerCase();
            if (supported.includes(detected)) return detected;
        }

        return 'en'; // Default
    }
}

module.exports = new LocaleService();