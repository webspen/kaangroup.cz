import defaultTheme from "tailwindcss/defaultTheme"


/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
        "./src/assets/**/*.svg",
    ],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                sans: [ "Open Sans", ...defaultTheme.fontFamily.sans ],
            },
        },
    },
}
