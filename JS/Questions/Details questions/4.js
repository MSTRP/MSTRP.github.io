Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("4", filters);

    //---------------Buttons 
    nextbuttonDefault(sections["Five"]);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("4", filters);

    //-----------date picker
    loadDatePicker("grantedPatents"); 
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});