//-----------data references
var qFilters = {
    TwoA: "${q://QID4/ChoiceTextEntryValue}",
    TwoB: "${q://QID5/ChoiceTextEntryValue}",
    ThreeA: "${q://QID8/ChoiceTextEntryValue}",
    ThreeB: "${q://QID100/ChoiceTextEntryValue}",
    FourD: "${q://QID11/ChoiceTextEntryValue}",
    FiveD: "${q://QID13/ChoiceTextEntryValue}",
    SixAD: "${q://QID15/ChoiceTextEntryValue}",
    SixBD: "${q://QID16%238/ChoiceGroup/SelectedChoicesForAnswer/1}",
    SevenD: "${q://QID48/ChoiceTextEntryValue}}",
    EightD: "${q://QID50/ChoiceTextEntryValue}",
    NineD: "${q://QID52/ChoiceTextEntryValue}",
    ElevenD: "${q://QID57/ChoiceTextEntryValue}",
    ElevenD2: "${e://Field/tRevDisplay}",
    TwelveD: "${q://QID60/ChoiceTextEntryValue}",
    Supporting: "${q://QID70/ChoiceGroup/SelectedChoices}"
};
var filters = [
    { filterRef: "3a", filterName: "disclosures", filterValue: "${q://QID8/ChoiceTextEntryValue}" },
    { filterRef: "3b", filterName: "patentApps", filterValue: "${q://QID100/ChoiceTextEntryValue}" },
    { filterRef: "4", filterName: "grantedPatents", filterValue: "${q://QID11/ChoiceTextEntryValue}" },
    { filterRef: "5", filterName: "otherIP", filterValue: "${q://QID13/ChoiceTextEntryValue}" },
    { filterRef: "6", filterName: "newTransactions", filterValue: "${q://QID15/ChoiceTextEntryValue}" },
    { filterRef: "7", filterName: "liveAgreements", filterValue: "${q://QID48/ChoiceTextEntryValue}" },
    { filterRef: "8", filterName: "terminatedAgreements", filterValue: "${q://QID50/ChoiceTextEntryValue}" },
    { filterRef: "9", filterName: "caseStudies", filterValue: "${q://QID52/ChoiceTextEntryValue}" },
    { filterRef: "11", filterName: "revenue", filterValue: "${q://QID57/ChoiceTextEntryValue}" },
    { filterRef: "12", filterName: "equity", filterValue: "${q://QID60/ChoiceTextEntryValue}" }
];
var listeners = {
    hotkeyNavigate: "${e://Field/hotKeyNav}",
    organisation: "${e://Field/organisation}",
    organisationName: "${q://QID3/ChoiceTextEntryValue/6}",
    progressBar: "${e://Field/progressBar}"
};

Qualtrics.SurveyEngine.addOnload(function () {

    //------Browser check
    if (jQuery("#Guidance_NOTES").length > 0) {
        broswerAlert();
    };
    //-------Button labels
    navlabels();
    //--hide tooltip if present
    jQuery('.tooltip').css("display", "none");

    //-------enable hotkey Navigation if disabled:
    navReset();
    //---------set org name for generic links:
    setOrgName();
    //------------page loading
    loadPage();//show questions
    loadScrollPosition(0);//load page at scroll top
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //---------Menu
    menuScroll(); //shadow when scrolling 
    tabMe("#Logo img", 1);
    loadMenu(listeners.progressBar); //menu button
    progressBar.switcher(listeners.progressBar);
    //---------Hotkey Navigate ---- ADD ON READY
    hotkeyNavigate(this);
    //-------sideways scroller for matrices (ADD ON READY):
    sideScrollButtons(jQuery(".SBS .QuestionBody"), ".ChoiceStructure tbody");
    //--------menu helper flash:
    borderFlash2([".menuHelper", "#ExtendSubmissions"], getColour("error"), "#Logo img");
    //----Response Summary Buttons:
    if (jQuery("#EndOfSurvey").length > 0) {
        prevbuttonDefault('Edit report');
        nextbuttonDefault("Submit report");
        jQuery("#NextButton").css("background-color", "blue");
        jQuery("#NextButton").attr('title', "Submit Report"); //blue submit button
    };
});