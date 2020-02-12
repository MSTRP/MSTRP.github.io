Qualtrics.SurveyEngine.addOnload(function () {
    //-----------Display logic
    hideRows2("11", filters);

    //-------------------load Extended submissions template text:
    loadTemplate(qFilters.ElevenD);

    //--------------Next button:
    nextbuttonDefault(sections.Twelve);

    //------------Revenue calc
    //nth-child selectors for input fields:
    let calcRefs = {
        incomeGrossRef: "13",
        directCostsRef: "16",
        revNetRef: "19",
        contributionWTRef: "22",
        contributionJust: "25",
        revShareWTRef: "28",
        revWTRef: "31"
    };
    totalRowFormat([3, 6]);
    totalColumnFormat(true, ['revNetRef', 'revWTRef'], calcRefs);
    revenueFormatting(calcRefs); 
    revenueCalc(calcRefs);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //-----------set hover text 
    setHoverText("11", filters);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});