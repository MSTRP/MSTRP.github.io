Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("9", filters);

    //-------------------load excel template
    loadtemplate(jQuery("#caseStudies_Template"), "9", filters)

    //---------------Buttons 
    nextbuttonDefault(sections["Part2"]);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("9", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});
