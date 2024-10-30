// Plugins
import daisyui from "daisyui";

// Services
import Theme from "./src/services/Theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    plugins: [daisyui],
    daisyui: { themes: Theme.getAll() },
};
