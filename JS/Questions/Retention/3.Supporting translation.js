Qualtrics.SurveyEngine.addOnload(function () {
    //-----Button labels:
    nextbuttonDefault(sections.Supporting);
    prevbuttonDefault("Section 2: Activity summary");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----character limit
    countText(".ChoiceStructure textarea", 1000, ".textCount")
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});