/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			width: {
				78: '78%',
				200: '200px',
			},
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
