Qualtrics.SurveyEngine.addOnload(function () {
	//-----------Buttons:
	nextbuttonDefault('Next: 4. Impact measurement and reporting');
	prevbuttonDefault('Back: 2. Progress');
});
Qualtrics.SurveyEngine.addOnReady(function () {
	//-----------Word count:
	let display = $('wordCountDisplay');
	let textbox = $('QR~' + this.questionId);
	textbox.onkeyup = function () {
		display.update(countWords(textbox.value));
	};
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/
});