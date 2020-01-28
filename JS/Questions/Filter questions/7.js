Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    var next = "Eight";
    var details = "SevenD";

    loadSwitch("next", [details, next], qFilters); //NEXT on load
    loadSwitch("back", ["SixBD", "SixAD", "Six"], qFilters); //PREVIOUS on load
    keyupSwitch([details, next]); //keyup switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------------Number formatting: 
    formatNumeral(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});