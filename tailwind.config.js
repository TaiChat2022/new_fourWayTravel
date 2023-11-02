/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;',
				product: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			fontSize: {
				xm: '13.5px',
				mm: '12px',
				nn: '11px',
				xx: '10px',
			},
			width: {
				78: '78%',
				200: '200px',
				70: '70%',
				10: '10%',
				'100px': '100px',
			},
			height: {
				300: '300px',
				310: '310px',
				340: '340px',
				110: '110px',
				96: '96px',
			},
			borderRadius: {
				search: '0px 10px 10px 0px',
				vch: '5px 0px 0px 5px',
				vchh: '0px 5px 5px 0px',
				ss: '4px 4px 4px 0px',
				zz: '50%',
				ww: '8px 0px 0px 8px',
				bb: '0px 8px 8px 0px',
				qq: '8px 8px 0px 0px',
			},
			backgroundColor: {
				1: 'rgb(233 244 250)',
				2: '#F3F4F5',
				3: '#E5E7EB',
				4: '#E8E2DD',
				5: '#0A1121',
			},
			translate: {
				10: '10%',
				18: '18%',
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
					star: '#E8E2DD',
					footer: '#f1f1f1',
				},
			},
		},
	},
	plugins: [],
};
