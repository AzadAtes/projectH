/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			flex: {
				"100px": "1 1 100px",
				"150px": "1 1 150px",
				"200px": "1 1 200px",
				"300px": "1 1 300px",
				"400px": "1 1 400px",
				"500px": "1 1 500px",
				"600px": "1 1 600px",
				"700px": "1 1 700px",
				"800px": "1 1 800px",
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
				red: "rgba(179, 61, 61, 0.75)",
				"main-color": "var(--main-color)",
				"main-bg-color": "var(--main-bg-color)",
				"main-icon-color": "var(--main-icon-color)",
				primary: "#fff",
				secondary: "#000",
				"neutral-light": "rgba(143, 143, 157, 0.05)",
				"neutral-dark": "rgba(143, 143, 157, 0.05)",
				blueish: "#292831",
				"top-bar": "#161619",
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
