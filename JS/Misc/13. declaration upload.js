Qualtrics.SurveyEngine.addOnload(function () {
    //-----------skip last check reminder-download page:
    //Qualtrics.SurveyEngine.setEmbeddedData('checkReminder', 1);

    checkSkip1("${e://Field/checkReminder}",1)
    //set direction to 1 = go back

    //-----------Buttons:
    let next = "Submit";
    let details = "Supporting";

    loadSwitch("next", [details, next], qFilters); //NEXT on load
    clickSwitch([next, details], '#QID70', '1')//click switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});
Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});