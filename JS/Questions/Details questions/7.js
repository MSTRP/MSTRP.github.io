Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("7", filters);

    //-------------------load Extended submissions template text:
    loadTemplate(qFilters.SevenD);

    //---------------Buttons 
    nextbuttonDefault(sections.Eight);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("7", filters);

    //-----------date picker:
    loadDatePicker("liveAgreements");

    //-------------lock scroll position:
    setScroll();
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});