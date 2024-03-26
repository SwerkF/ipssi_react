/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
	themes: [
	  {
		mytheme: {
		
			"primary": "#E0773C",
					
			"secondary": "#009bff",
					
			"accent": "#fbbf24",
					
			"neutral": "#181e20",
					
			"base-100": "#fffaff",
					
			"info": "#3ABEF7",
					
			"success": "#37D39A",
					
			"warning": "#FABE22",
					
			"error": "#F97272",
		},
	  },
	],
  },
  plugins: [require("daisyui")],
}