Qualtrics.SurveyEngine.addOnload(function () {
    //-----------skip last check reminder:
    checkSkip2("${e://Field/checkReminder}", this);

    //-----------Buttons:
    nextbuttonDefault('Upload delcaration');
    prevbuttonDefault('Double-check responses');
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});