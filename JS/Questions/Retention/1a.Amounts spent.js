Qualtrics.SurveyEngine.addOnload(function () {
        /*Place your JavaScript here to run when the page loads*/
        nextbuttonDefault("Section 2: Activity summary");
});

Qualtrics.SurveyEngine.addOnReady(function () {
        //---------Currency formatting:
        currencyPounds1(this);

        //---------Calc unspent amounts
        fieldSub("#QID235", "#QID236", "${e://Field/Retained%20amount}");
});

Qualtrics.SurveyEngine.addOnUnload(function () {
        /*Place your JavaScript here to run when the page is unloaded*/
});