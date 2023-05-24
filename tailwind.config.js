import defaultTheme from "tailwindcss/defaultTheme"


/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
        "./src/assets/**/*.svg",
        "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",  // To include Flowbite components styling
    ],
    plugins: [
        "flowbite/plugin"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [ "Open Sans", ...defaultTheme.fontFamily.sans ],
            },
        },
    },
}
