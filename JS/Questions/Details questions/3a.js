Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic   
    hideRows("3a", filters);

    //-------------------load Extended submissions template text:
    loadTemplate(qFilters.ThreeA);

    //---------------Buttons 
    loadSwitch("next", ["ThreeB", "Four"], qFilters);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("3a", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});