Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    nextbuttonDefault(sections.Submit2);//NEXT on load
    loadSwitch("back", ["Supporting", "DecDown"], qFilters); //PREVIOUS on load
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});