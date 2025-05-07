/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#007AFF',
                secondary: '#6B7280',
                dark: '#1F2937',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'scale(0) translate(-50%, -50%)' },
                    '100%': { opacity: '1', transform: 'scale(1) translate(-50%, -50%)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
            },
        },
    },
    plugins: [],
} 