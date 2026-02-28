// JavaScript to change the background
function changeBackground() {
	// Select the div
	const backgroundDiv = document.getElementById("background");

	// Change the background image after 3 seconds
	setTimeout(() => {
		backgroundDiv.classList.remove("bg-[url('./images/dentist1.webp')]");
		backgroundDiv.classList.add("bg-[url('./images/dentist2.webp')]");
	}, 3000);
}

// Call the function
changeBackground();
