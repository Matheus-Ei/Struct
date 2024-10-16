/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                middle: "var(--middle)",
                semi: "var(--semi)",

                error: "var(--error)",
                success: "var(--success)",
            },
            fontFamily: {
                consolas: "var(--font)",
            },
        },
    },
    plugins: [],
};
