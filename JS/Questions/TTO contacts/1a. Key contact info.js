Qualtrics.SurveyEngine.addOnload(function () {
    /*Place your JavaScript here to run when the page loads*/
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //-----------Buttons:
    let next = "End2";
    let details = "TTO2";
    loadSwitch("next", [details, next], qFilters); //NEXT on load
    clickSwitch([next, details], '#QID6', '1')//click switcher


    let nextBlue = function () {
        let nb = jQuery("#NextButton");
        if (nb.prop("value") == "Submit") {
            nb.css("background-color", "blue");
        } else (
            nb.css("background-color", getColour("primary"))
        );
    }
    nextBlue();

    jQuery("#QID6").click(function () { nextBlue() });

    //--------clear trailing spaces on blur:	
    cleanForm(this);
});
Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});/*  */