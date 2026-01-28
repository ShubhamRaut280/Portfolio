export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            transitionDuration: {
                '1500': '1500ms',
                '800': '800ms',
            }
        },
    },
    plugins: {
        '@tailwindcss/postcss': {},
    },
}
