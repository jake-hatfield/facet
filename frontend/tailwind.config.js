/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				'tan-100': '#dfd7c5',
				'tan-200': '#c7c0b0',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar'),
	],
};
