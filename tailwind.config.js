const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: defaultTheme.colors.green,
                gray: {
                    'bg': '#f5f7fb'
                },
                blue: {
                    'nav': '#091336'
                }
            }
        },
        maxWidth: {
            icon: '24px'
        }
    }
};
