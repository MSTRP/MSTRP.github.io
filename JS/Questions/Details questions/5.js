Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("5", filters); //run the program 

    //---------------Buttons: 
    nextbuttonDefault(sections["Six"]);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("5", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});