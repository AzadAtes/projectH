/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			flex: {
				"200px": "1 1 200px",
				"900px": "1 1 900px",
			},
			minWidth: {
				main: "300px",
			},
			maxWidth: {
				"900px": "900px",
				main: "1200px",
			},
			colors: {
				"main-color": "var(--main-color)",
				"main-bg-color": "var(--main-bg-color)",
				primary: "#fff",
				secondary: "#000",
				"neutral-light": "#929292",
				"neutral-dark": "#242424",
			},
			height: {
				header: "60px",
			},
			margin: {
				header: "60px",
			},
		},
	},
	plugins: [],
};
