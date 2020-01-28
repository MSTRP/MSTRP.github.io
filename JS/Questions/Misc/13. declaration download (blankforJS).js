Qualtrics.SurveyEngine.addOnload(function () {
    //-----------skip last check reminder-upload page:
    checkSkip1("${e://Field/checkReminder}", 2);

    //---------------Buttons 
    nextbuttonDefault(sections.DecUp);
    loadSwitch("back", ["TwelveD", "Twelve"], qFilters); //PREVIOUS on load

    //---------------completion check:
    checkAll(qFilters, "guidance", ["SixBD", "ElevenD2"]);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------completion alert on click next:
    nextCheck(qFilters, this, true);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});