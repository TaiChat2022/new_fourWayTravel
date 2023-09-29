/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
	safelist: ['bg-blue-200', 'text-blue-500', 'bg-red-200', 'text-red-500'],
};
