Qualtrics.SurveyEngine.addOnload(function () {
	/*Place your JavaScript here to run when the page loads*/
});
Qualtrics.SurveyEngine.addOnReady(function () {
	//-----------Word count:
	let display = $('wordCountDisplay2');
	let textbox = $('QR~' + this.questionId);
	textbox.onkeyup = function () {
		display.update(countWords(textbox.value));
	};
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/
});