Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("8", filters); //run the program

    //---------------Buttons 
    nextbuttonDefault(sections["Nine"]);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input
    setHoverText("8", filters);

    //-----------date picker:
    loadDatePicker("terminated");
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});