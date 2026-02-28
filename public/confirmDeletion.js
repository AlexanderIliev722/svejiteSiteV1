function confirmDeletion(event) {
	// Display confirmation dialog
	const userConfirmed = confirm(
		"Сигурен ли сте, че искате да изтриете този профил?"
	);
	// If the user clicks "Не" (Cancel), prevent form submission
	if (!userConfirmed) {
		event.preventDefault();
		return false;
	}
	return true; // Proceed with the form submission if "Да" is clicked
}
