Qualtrics.SurveyEngine.addOnload(function () {
    //-----Button labels:
    nextbuttonDefault("Activity summary");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //---------Currency formatting:
    currencyPounds1(this);
})

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});