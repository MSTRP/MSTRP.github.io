Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    var next = "Twelve";
    var details = "ElevenD";

    loadSwitch("next", [details, next], qFilters); //NEXT on load
    prevbuttonDefault("Financial contact information"); //PREVIOUS on load
    keyupSwitch([details, next]); //keyup switcher        
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------------Number formatting: 
    formatNumeral(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});