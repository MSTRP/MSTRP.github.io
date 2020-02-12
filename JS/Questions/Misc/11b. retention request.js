Qualtrics.SurveyEngine.addOnload(function () {
    //-------------------load Extended submissions template text:
    loadTemplate(qFilters.ElevenD2);

    //---------------Buttons:
    nextbuttonDefault(sections.Twelve);
    prevbuttonDefault(sections.ElevenD);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});