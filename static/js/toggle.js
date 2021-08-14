// Toggle between dark and light modes.

const darkTheme = document.getElementById("dark-mode-theme"); // <link> to the CSS file for dark mode
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light"; // default system theme
const savedTheme = localStorage.getItem("dark-mode-storage") || systemTheme;

window.onload = function () {
	let toggle = document.getElementById("dark-mode-toggle");

	// set the theme by enabling/disabling `darkTheme` and replacing the svg (feather icon).
	function setTheme(mode) {
		if (mode === "dark") {
			darkTheme.disabled = false;
			$("svg.feather.feather-sun").replaceWith(
				feather.icons.moon.toSvg()
			);
			$("svg.feather.feather-moon").attr("id", "mode-icon");
		} else if (mode === "light") {
			darkTheme.disabled = true;
			$("svg.feather.feather-moon").replaceWith(
				feather.icons.sun.toSvg()
			);
			$("svg.feather.feather-sun").attr("id", "mode-icon");
		}
	}

	// When the `toggle` span is clicked, change the local storage value and toggle the theme.
	toggle.addEventListener("click", () => {
		let mode_icon = document.getElementById("mode-icon");

		if (mode_icon.classList.contains("feather-sun")) {
			localStorage.setItem("dark-mode-storage", "dark");
			setTheme("dark");
		} else if (mode_icon.classList.contains("feather-moon")) {
			localStorage.setItem("dark-mode-storage", "light");
			setTheme("light");
		}
	});
};
