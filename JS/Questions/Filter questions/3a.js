Qualtrics.SurveyEngine.addOnload(function () {
    //------------BUTTONS:
    let buttons = ["ThreeB", "ThreeA", "Four"]

    loadSwitch("next", buttons, qFilters); //NEXT on load
    prevbuttonDefault("Section 2: Summary"); //PREVIOUS on load
    keyupSwitch(buttons); //keyup switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------------Number formatting: 
    formatNumeral(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});