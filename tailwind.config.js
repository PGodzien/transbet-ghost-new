const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    important: true,
    purge: {
        enabled: process.env.NODE_ENV == "production",
        content: ["./*.hbs", "./partials/**/*.hbs", "./members/**/*.hbs"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                animateRight: {
                    "100%": {
                        transform: "translateX(calc(-420px * 11))",
                    },
                },
                rotation: {
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                rotation2: {
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
            },
            animation: {
                rotation: "rotation 40s ease-in-out infinite",
                rotation2: "rotation 30s ease-in-out infinite",
                animateRight: "animateRight 90s linear infinite",
            },
            fontFamily: {
                sans: ["Hubot-Sans", ...defaultTheme.fontFamily.sans],
                serif: ["Hubot-Sans", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: "#354a79",
                secondary: "#EA580C",
                specialGray: "#f8f8f8",
                teal: colors.teal,
                lightblue: "#0ea5e9",

                borderWidth: {
                    DEFAULT: "1px",
                    0: "0",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                    12: "12px",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
};
