Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    var next = "Seven";
    var details = "SixAD";

    loadSwitch("next", [details, next], qFilters); //NEXT on load
    loadSwitch("back", ["FiveD", "Five"], qFilters); //PREVIOUS on loa
    keyupSwitch([details, next]); //keyup switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------------Number formatting: 
    formatNumeral(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});