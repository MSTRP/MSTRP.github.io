Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic   
    hideRows("3a", filters); //run the program

    //---------------Buttons 
    var next = "Four";
    var details = "ThreeB";

    loadSwitch("next", [details, next,], qFilters);
    /* //on NPF click:
    buttons3a("16", details, next); */
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("3a", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});