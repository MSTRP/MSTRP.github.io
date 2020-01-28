Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic:
    hideRows("6", filters); //run the program

    //---------------Buttons 
    var next = "Seven";
    var details = "SixBD";

    //on load:
    loadSwitch("next", [details, next], qFilters); //NEXT on load   
    buttons6a(next, details);//click switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //--------------Display formatting
    format6({ transactionType: "15", moreInfo: "18" , exAgreement: "30", noInfo: "33"});

    //-------------lock scroll position:
    setScroll();

    //----------set hover text for each input
    setHoverText("6", filters);

    //-----------date picker:
    loadDatePicker("newTransactions");
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the pae is unloaded*/
});