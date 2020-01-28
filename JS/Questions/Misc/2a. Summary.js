Qualtrics.SurveyEngine.addOnload(function () {
    //-----Button labels:
    nextbuttonDefault(sections["Three"]);
    prevbuttonDefault("Section 1: Key contact details");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //---------Numeral formatting:
    formatNumeral(this); 
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});