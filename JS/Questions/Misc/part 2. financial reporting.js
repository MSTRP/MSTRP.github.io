Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    nextbuttonDefault(sections.Ten);//NEXT on load
    loadSwitch("back", ["NineD", "Nine"], qFilters); //PREVIOUS on load

    //---------------completion check:
    checkAll(qFilters, "guidance", ["SixBD"], "ElevenD");
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});