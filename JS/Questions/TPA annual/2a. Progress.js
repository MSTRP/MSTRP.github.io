Qualtrics.SurveyEngine.addOnload(function () {
	//-----------Buttons:
	nextbuttonDefault('Next: 3. Budget and oversight');
	prevbuttonDefault('Back: 1. Project details');
});
Qualtrics.SurveyEngine.addOnReady(function () {
	//-----------Word count:
	let display = $('wordCountDisplay1');
	let textbox = $('QR~' + this.questionId);
	textbox.onkeyup = function () {
		display.update(countWords(textbox.value));
	};
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/
});