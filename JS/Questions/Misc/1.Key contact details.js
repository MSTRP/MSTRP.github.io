Qualtrics.SurveyEngine.addOnload(function () {
	//--------Buttons:
	nextbuttonDefault('Begin part 1');
	console.log(listeners.organisation);
});

Qualtrics.SurveyEngine.addOnReady(function () {
	//--------clear trailing spaces on blur:	
	cleanForm(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	 /*Place your JavaScript here to run when the page is unloaded*/
});