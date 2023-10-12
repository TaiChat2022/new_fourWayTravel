/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#cce5f3',
					200: '#99cbe7',
					300: '#66b0da',
					400: '#3396ce',
					500: '#007cc2',
					600: '#00639b',
					700: '#004a74',
					800: '#00324e',
					900: '#001927',
				},
			},
		},
	},
	plugins: [],
};
