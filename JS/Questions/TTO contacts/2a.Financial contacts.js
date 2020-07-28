Qualtrics.SurveyEngine.addOnload(function () {
    /*Place your JavaScript here to run when the page loads*/
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //-----Button labels:
    nextbuttonDefault(sections.End2);
    prevbuttonDefault('Key contact information');

    //--------clear trailing spaces on blur:	
	cleanForm(this);
});
Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});