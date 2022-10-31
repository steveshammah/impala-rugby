/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primaryRed': '#ff002b',
                'darkRed': "#a0001c",
                'whiteX': "#cacaca",
                'blueLight': "#407ba7",
                'blueDark': "#1d2537",
                'blackX': '#212529',
                'light': '#495057',
                'online': '#ff0000'

            },
            height: {
                nav: '60px'
            },
            fontFamily: {
                default: ["Poppins", ' sans - serif']
            }
        },
    },
    plugins: [],
}