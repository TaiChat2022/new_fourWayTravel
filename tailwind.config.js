/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#edfaff',
					100: '#d6f2ff',
					200: '#b5eaff',
					300: '#83deff',
					400: '#48caff',
					500: '#1eabff',
					600: '#068dff',
					700: '#006ce4',
					800: '#085cc5',
					900: '#0d509b',
					950: '#0e315d',
				},
			},
		},
	},
	plugins: [],
};
