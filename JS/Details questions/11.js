Qualtrics.SurveyEngine.addOnload(function () {
    //--------------Next button:
    loadSwitch("next", ["ElevenD2", "Twelve"], qFilters);

    //-----------Display logic
    hideRows2("11", filters);

    //------------Revenue calc
    //nth-child selectors for input fields as an object:
    let calcRefs2 = {
        incomeGrossRef: "13",
        directCostsRef: "16",
        revNetRef: "19",
        contributionWTRef: "22",
        contributionJust: "25",
        revShareWTRef: "28",
        revWTRef: "31"
    };

    totalRowFormat([3, 6]); //total row formatting
    totalColumnFormat(true, ['revNetRef', 'revWTRef'], calcRefs2); //total columns formatting
    revenueFormatting(calcRefs2); //claculation helpers fromatting
    revenueCalc(calcRefs2);//calculations on input:
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //-----------set hover text 
    setHoverText("11", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});