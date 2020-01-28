Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows("12", filters); //run the program

    //--------------Next button:
    nextbuttonDefault(sections.DecDown);

    //-----------Equity calc and formatting
    //nth-child selectors for input fields as an object:
    var eCalcRefs = {
        totalSharesRef: "10",
        contributionWTRef: "19",
        contJustificationRef: "22",
        equityShareWTRef: "25",
        equityWTRef: "28"
    };
    totalColumnFormat(false, ["equityWTRef"], eCalcRefs); //total column formatting
    equityFormatting(eCalcRefs); //inout helpers formatting
    equityCalc(eCalcRefs);//calc
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input - ON READY
    setHoverText("12", filters);
    
    //-------------lock scroll position:
    setScroll();
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});