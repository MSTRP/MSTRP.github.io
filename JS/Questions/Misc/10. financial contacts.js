Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    nextbuttonDefault(sections.Eleven);
    prevbuttonDefault("Financial Reporting info");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //--------clear trailing spaces on blur:	
    cleanForm();
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});