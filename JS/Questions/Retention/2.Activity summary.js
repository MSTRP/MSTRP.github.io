Qualtrics.SurveyEngine.addOnload(function () {
    //-----Button labels:
    nextbuttonDefault("Section 3: Supporting translation");
    prevbuttonDefault("Section 1: Amounts spent");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----character limit
    countText(".ChoiceStructure textarea")
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});