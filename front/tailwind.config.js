// Services
import Theme from "./src/services/Theme";

/** @type {import('tailwindcss').Config} */
export default  {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    plugins: [require("daisyui")],
    daisyui: { themes: Theme.getAll() },
};
