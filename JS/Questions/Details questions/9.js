Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic:
    hideRows("9", filters);

    //-------------------load Extended submissions template text:
    loadTemplate(qFilters.NineD);

    //---------------Buttons: 
    nextbuttonDefault(sections.Part2);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("9", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});
