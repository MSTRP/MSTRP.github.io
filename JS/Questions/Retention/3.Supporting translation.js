Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Buttons:
    let next = "Submit2";
    let details = "Supporting";

    loadSwitch("next", [details, next],qFilters); //NEXT on load
    clickSwitch([next, details], '#QID156', '1')//click switcher
    prevbuttonDefault("Section 2: Activity Summary");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});
Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});