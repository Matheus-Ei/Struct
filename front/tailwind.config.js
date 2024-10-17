// Plugins
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    plugins: [daisyui],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
            {
                template: {
                    // Primary
                    primary: "#000000",
                    "primary-content": "#ffffff",

                    // Secondary
                    secondary: "#ffffff",
                    "secondary-content": "#000000",

                    // To hightlite things
                    accent: "#373737",
                    "accent-content": "#ffffff",

                    // Neutral color
                    neutral: "#959595",
                    "neutral-content": "#000000",

                    "base-100": "#ffffff", // Background color
                    "base-200": "#ededed", // Little darker than background
                    "base-300": "#e0e0e0", // More darker than background
                    "base-content": "#000000", 

                    // For errors
                    error: "#db0000",
                    "error-content": "#ffffff",

                    // Informations
                    info: "#008adb",
                    "info-content": "#ffffff",

                    // Warnings
                    warning: "#dba300",
                    "warning-content": "#ffffff",

                    // Success
                    success: "#15db00",
                    "success-content": "#ffffff",
                },
            },
        ],
    },
};
