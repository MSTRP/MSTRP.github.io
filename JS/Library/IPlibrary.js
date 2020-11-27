"use strict";

//version tracking
var phase = {
    live: "Live Reporting Period ",
    closed: "Dev Cycle "
};

var version = '1.2.4.4';//increment me when publishing changes
console.log("Version: ", phase.closed + version);


//---------------------------Sections contents:
//SECTION 0: GLOBAL VARIABLES
//SECTION 1: Text and Formatting
//SECTION 2: Display logic
//SECTION 3: Buttons and shortcuts
//SECTION 4: WIDGETS
//Section 5: Question specific


//----------------------SECTION 0: GLOBAL VARIABLES
//0) Mapping
//theme colours as hex codes
var theme = {
    default: {
        text: "#000000",//Pitch
        border: "#262626",//dark grey
        inputBackground: "rgba(0, 0, 0, 0.06)",//light grey
        helpText: "#0000ff",//Blue
    },
    colours: {
        primary: "#000000",//darkest shade/colour: Pitch
        secondary: "#464749", //medium shade/colour: Pitch 2
        tertiary: "#C7C8C9", //lightest shade/colour: Pitch 3
        error: "#E10F2D", //Rare
    },
    highlights: {
        errorBackground: "#ED858E",//Rare 2
        totalBorder: "#C29207", //Runny Yolk 2
        autofillBackground: "#FFF9A6",//Submarine 2
        relatedBackground: "#BAE2E2"//Bora Bora 3
    }/* ,
    darkMode: {
        text: "#ffffff",
        border: "#ffffff",
        primary: "#b1b1b1",
        canvas: "#313131",
    } */
};

//Question IDs - selectors for question wrappers
var QuestionIDs = {
    ThreeA: {
        filter: "#QID8",
        details: "#QID9"
    },
    ThreeB: {
        filter: "#QI100",
        details: "#QID10"
    },
    FourD: {
        filter: "#QID11",
        details: "#QID12"
    },
    FiveD: {
        filter: "#QID13",
        details: "#QID14"
    },
    SixAD: {
        filter: "#QID15",
        details: "#QID16"
    },
    SevenD: {
        filter: "#QID48",
        details: "#QID49"
    },
    EightD: {
        filter: "#QID50",
        details: "#QID51"
    },
    NineD: {
        filter: "#QID52",
        details: "#QID53"
    },
    ElevenD: {
        filter: "#QID57",
        details: "#QID58"
    },
    TwelveD: {
        filter: "#QID60",
        details: "#QID61"
    }
};

var totalTables = [QuestionIDs.ElevenD.details];

var allQuestions = function (type) {
    let list = [];
    switch (type) {
        case "filters":
            Object.values(QuestionIDs).forEach(question => list.push(question.filter));
            return list;
        case "details":
            Object.values(QuestionIDs).forEach(question => list.push(question.details));
            return list;

        /* default:
            Object.values(QuestionIDs).forEach(function (question) {
                list.push([question.filter, question.details]);
            });
            return list; */
    };

};
var filterSelect = function (question) {
    return jQuery(QuestionIDs[question].filter);
};


var detailsSelect = function (question) {
    return jQuery(QuestionIDs[question].details);
};

/* var getDID = function (question) {
    return QuestionIDs[question]["details"];
};
var getFID = function (question) {
    return QuestionIDs[question]["filter"];
}; */

//section headings
var sections = {
    Back: "←",
    Three: "Section 3: Invention disclosures and new patent applications",
    ThreeA: "Invention disclosure details",
    ThreeB: "Patent applications filed details",
    Four: "Section 4: Granted patents",
    FourD: "Granted patents details",
    Five: "Section 5: other material IP",
    FiveD: "other material IP details",
    Six: "Section 6: New transactions",
    SixAD: "New transaction details",
    SixBD: "Upload new transaction agreements",
    Seven: "Section 7: Other live agreements",
    SevenD: "Other live agreements details",
    Eight: "Section 8: Abandoned patents and terminated agreements",
    EightD: "Abandoned patents and terminated agreements details",
    Nine: "Section 9: Case studies",
    NineD: "Case studies summary",
    Part2: "Part 2: Financial Reporting",
    Ten: "Section 10: Financial contact details",
    Eleven: "Section 11: Revenue",
    ElevenD: "Revenue generating transaction details",
    ElevenD2: "Revenue Retention",
    Twelve: "Section 12: Equity",
    TwelveD: "Equity obtained details",
    DecDown: "Download declaration form",
    DecUp: "Upload declaration form",
    Supporting: "Upload Supporting Documents",
    Submit: "Completion Checklist",
    Submit2: "Summary of responses",
    End: "Submit report",
    End2: "Submit",
    TTO2: "Financial contact information"
};

var filterNames = {
    TwoA: "Section 2: Summary - No. of Wellcome awards",
    TwoB: "Section 2: Summary - Aggregate Wellcome funding",
    Three: "Section 3: Invention disclosures and new patent applications",
    ThreeA: "Section 3: Invention disclosures",
    ThreeB: "Section 3: New patent applications",
    Four: "Section 4: Granted patents",
    FourD: "Section 4: Granted patents",
    Five: "Section 5: other material IP",
    FiveD: "Section 5: other material IP",
    Six: "Section 6: New transactions",
    SixAD: "Section 6: New transactions",
    SixBD: "Section 6: New transactions - Agreement uploads",
    Seven: "Section 7: Other live agreements",
    SevenD: "Section 7: Other live agreements",
    Eight: "Section 8: Abandoned patents and terminated agreements",
    EightD: "Section 8: Abandoned patents and terminated",
    Nine: "Section 9: Case studies",
    NineD: "Section 9: Case studies",
    Eleven: "Section 11: Revenue",
    ElevenD: "Section 11: Revenue",
    ElevenD2: "Section 11: Revenue retention",
    Twelve: "Section 12: Equity",
    TwelveD: "Section 12: Equity",
};

//references for question with string filter values
var stringfilters = ["SixBD", "Supporting", "TTO2"];

//question table headings:
var columnNames = {
    "3a": {

        input: {
            "7": "Organisation Reference"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "10": "Named inventors. Wellcome funded inventors in brackets",
            "13": "Invention title"
        },
        select: {
            "16": "Patent Application status (N = Not being progressed, F = Patent filed, P = Patent pending "
        }
    },

    "3b": {

        input: {
            "7": "Organisation Reference (from invention disclosure details)",
            "19": "Priority date (dd/mm/yyyy)"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (from invention disclosure details)",
            "10": "Named inventors (from invention disclosure details)",
            "13": "Patent title (from invention disclosure details)",
            "16": "Patent Application Number(s)"
        }
    },
    "4":
    {
        input: {
            "7": "Organisation Reference",
            "19": "Priority date (dd/mm/yyyy)"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "10": "Named inventors. Wellcome funded inventors in brackets",
            "13": "Patent title",
            "16": "Patent Number(s)"
        },
        select: {
            "22": "Has this granted patent been licensed?"
        }
    },
    "5": {

        input: {
            "7": "Organisation Reference"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "13": "Creators (Wellcome funded creators in brackets)",
            "16": "Please write any additional comments here"
        },
        select: {
            "10": "IP type"
        }
    },
    "6": {

        input: {
            "7": "Organisation Reference",
            "10": "Licence (type of transaction)",
            "11": "Assignment (type of transaction)",
            "12": "Material Transfer Agreement (type of transaction)",
            "13": "Evaluation agreement (type of transaction)",
            "14": "Spin-out (type of transaction)",
            "15": "Other - please specify in the next answer field",
            "27": "Effective Date (dd/mm/yyyy)",
            "36": "Exclusive (degree of exclusivity)",
            "37": "Non-exclusive (degree of exclusivity)"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "18": "if you selected other, please provide more detail here",
            "21": "Counterparty(s) (avoid acronyms)",
            "24": "Brief description of underlying IP right",
            "33": "If you do not have the executed agreement, please let us know why"
        },
        select: {
            "30": "Do you have the executed agreement?",
            "40": "Wellcome revenue sharing terms"
        }
    },
    "7": {

        input: {
            "7": "Organisation Reference",
            "10": "Licence (type of transaction)",
            "11": "Assignment (type of transaction)",
            "12": "Material Transfer Agreement (type of transaction)",
            "13": "Evaluation agreement (type of transaction)",
            "14": "Option (type of transaction)",
            "15": "Spin-out (type of transaction)",
            "24": "Effective Date (dd/mm/yyyy)",
            "27": "Exclusive (degree of exclusivity)",
            "30": "Non-exclusive (degree of exclusivity)"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "18": "Counterparty(s) (avoid acronyms)",
            "21": "Brief description of underlying IP right",
        }
    },
    "8": {

        input: {
            "7": "Organisation Reference",
            "13": "Date of revocation/abandonment/termination/etc (dd/mm/yyyy)"
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "10": "Counterparty(s) (avoid acronyms)",
            "22": "Rationale for abandonment/termination/etc."
        },
        select: {
            "16": "IP rights or commercial agreement?",
            "19": "Status"
        }
    },
    "9": {

        input: {
            "7": "Organisation Reference",
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "19": "Comments. please use this field to give us the detail related to this case. You are welcome to write as much/little as you feel is necessary"
        },
        select: {
            "10": "Technology type",
            "13": "Technology sub-type",
            "16": "Primary IP type",
            "22": "Is this case in development or post deal?",
            "25": "Is there any industry involvement with this case?"
        }
    },
    "11": {

        input: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "7": "Organisation Reference",
            "13": "Gross income (£)",
            "16": "Direct Costs (£)",
            "19": "Net income (£ - auto-calculation)",
            "22": "Wellcome Contribution/WC (%)",
            "28": "Wellcome Revenue Share/WR (%)",
            "31": "Revenue Attributable to Wellcome (auto-calculation)",
            "34": "Purchase order/invoice number (if applicable)"
        },
        textarea: {
            "10": "Counterparty(s) (avoid acronyms)",
            "25": "Justification of a lower percentage (if applicable, where 3.2 of Appendix 2 applies)"
        }
    },
    "12": {

        input: {
            "7": "Organisation Reference",
            "10": "total number of shares in company",
            "16": "percentage equity holding which the shares obtained represent (%)",
            "19": "Wellcome's funding contribution (%)",
            "25": "Wellcome's share of equity (%)",
            "28": "amount of shares Wellcome is entitled to (auto-calculation)",
        },
        textarea: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "13": "company name (avoid acronyms)",
            "22": "justification of a lower percentage (if applicable, where 3.2 of Appendix 2 applies)"
        },
        select: {
            "31": "Holding shares on behalf of Wellcome?"
        }
    }
};


//question columns with dates:
var dateColumnsAll = {
    filedPatents: "19",
    grantedPatents: "19",
    newTransactions: "27",
    liveAgreements: "24",
    terminated: "13",
};


//1) embedded data methods:

//method to update and call filter value:
var getFilters = function (question, filters) {

    for (let value of filters) {

        //map values from filters array to variables for 
        //ebedded data method:
        let ref = value["filterRef"];

        let val = value["filterValue"];

        let name = value["filterName"];

        if (ref == question) {
            Qualtrics.SurveyEngine.setEmbeddedData(name, val);
            return Qualtrics.SurveyEngine.getEmbeddedData(name);
        };
    };
};



//2) array and object methods:
var filterBlanks = function (selector) {
    return selector.filter(function () {
        return checkBlank(jQuery(this).val()) === "Blank"
    })
};//get array of blank values from selector

var filterBlanks2 = function (selector) {
    return selector.filter(function () {
        return checkNum(jQuery(this)) == "B/0"
    })
}

//get an array of the input fields on the page excluding the buttons:
var filterButtons = function () {
    return jQuery("input").filter(function () {
        return jQuery(this).attr('id').includes("Button") == false
    })
};

//functions to check the arrays:

//filter an array of inpur and return an array with the blank fields
var getBlank = function (array, exception) {
    let Blanks = (exception != undefined) ?
        array.filter(selector => selector.val().length === 0 || selector != exception)
        : array.filter(selector => selector.val().length === 0);

    return Blanks

    /*  if (exception != undefined) {
         var allBlanks = array.filter(selector => selector.val().length === 0
             || selector != exception)
         return allBlanks
     } else {
         var allBlanks = array.filter(selector => selector.val().length === 0)
         return allBlanks
     } */
};

//filter an array of inpur and return an array with the blank fields
var getNotBlank = function (array, exception) {
    switch (exception) {
        case undefined:
            let nonBlanks1 = array.filter(selector => selector.val().length > 0);
            return nonBlanks1;
        default:
            let nonBlanks2 = array.filter(selector => selector.val().length > 0 || selector == exception)
            return nonBlanks2;
    }

    /* if (exception != undefined) {
        var nonBlanks = array.filter(selector => selector.val().length > 0
            || selector == exception)
        return nonBlanks
    } else {
        var nonBlanks = array.filter(selector => selector.val().length > 0)
        return nonBlanks
    } */
};

var getNotBlank2 = function (array, exception) {
    switch (exception) {
        case undefined:
            let nonBlanks1 = array.filter(function () {
                return checkNum(jQuery(this)) == "Not B/0"
            });
            return nonBlanks1;
        default:
            let nonBlanks2 = array.filter(function () {
                return checkNum(jQuery(this)) == "Not B/0" || jQuery(this) == exception
            });
            return nonBlanks2;
    }
};

//filter an array of inputs and return the fields otehr than the current field specifed
var getOthers = function (array, currentItem) {
    let Others = array.filter(selector => selector != currentItem);
    return Others
};


//3) string constructor:
//define global functions:
var columnSelect = function (columnRef, parentarray) {
    let nthselectOpen = "td:nth-child("
    let nthslectClose = ")"
    if (parentarray != undefined) {
        return nthselectOpen + parentarray[columnRef] + nthslectClose
    } else { return nthselectOpen + columnRef + nthslectClose }

}; //nth child select to select input fields by column using calcRefs2 object

// "input" constructor basedon on column select
var inputSelect = function (selector) {

    let thisInput = selector.find("input");
    return thisInput
};


var selectSelect = function (selector) {

    let thisInput = selector.find("select");
    return thisInput
};

var textareaselect = function (selector) {
    let thisInput = selector.find("textarea");
    return thisInput
};

//theme getters

var getDefault = function (item) {
    return theme.default[item]
};

var getColour = function (item) {
    return theme.colours[item]
};

var getHighlight = function (item) {
    return theme.highlights[item]
};

//*----------------------SECTION 1: Text and Formatting--------------------*/

//  1) turn filter question entry field into numeral with currency
var currencyPounds1 = function (answerFieldi) {
    //currencyPounds1(this); //<---run the programme

    let QID = answerFieldi.getQuestionInfo()["QuestionID"];
    //pull question id from qualtrics

    //Join strings to form class for cleave function 
    let joinIdentifiers = function (ID, part1, part2) {
        //function to turn unique id into reference class for cleave

        var unSetID = ["QR", ID];
        var SetID = unSetID.join('-');
        //returns QR-[ID]

        var elements = [part1, SetID, part2];
        var joinedElements = elements.join('.');
        //join elemets with '.'

        return joinedElements
        //returns 'part1.QR-[ID].part2'
    };

    //construct class 
    let cleaveField = joinIdentifiers(QID, ".InputText", "QWatchTimer");
    //returns '.InputText.QR-[ID].QWatchTimer

    new Cleave(cleaveField, {
        numeral: true,
        numeralThousandGroupStyle: 'thousand',
        prefix: '£'
    });
};



//  3) numeral formatting for filter questions
var formatNumeral = function (answerFieldi) {
    //pull question id from qualtrics
    let QID = answerFieldi.getQuestionInfo()["QuestionID"];

    //Join strings to form class for cleave function 
    let joinIdentifiers = function (ID, part1, part2) {
        //function to turn unique id into reference class for cleave

        var unSetID = ["QR", ID];
        var SetID = unSetID.join('-');
        //returns QR-[ID]

        var elements = [part1, SetID, part2];
        var joinedElements = elements.join('.');
        //join elemets with '.'

        return joinedElements
        //returns 'part1.QR-[ID].part2'
    };

    //construct class 
    let cleaveField = joinIdentifiers(QID, ".InputText", "QWatchTimer");
    //returns '.InputText.QR-[ID].QWatchTimer

    new Cleave(cleaveField, {
        numeral: true,
        numeralThousandGroupStyle: 'thousand'
    });
};

/*formatNumeral(this); //run the programme*/

// 4) General number formatting :
var englishPerecent = new Intl.NumberFormat('en-GB', { style: 'percent', maximumSignificantDigits: 3, maximumFractionDigits: 0, useGrouping: false }).format;
//% format

var englishPounds = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', useGrouping: 'true' }).format;
//£0.00 format

var formatNumber = new Intl.NumberFormat('en-GB', { style: 'decimal', maximumFractionDigits: 0, useGrouping: true }).format;
//basic number formatting

//5) Css formatting:

var colourMe = function (selector, colour) {
    selector.css("background-color", colour);
};

var hoverMe = function (selector, colours) {
    selector.css("background-color", colours[0]);
    selector.hover(function () {
        selector.css("background-color", colours[1])
    });
};

//-----related inputs/general
var autofillCSS = function (selector) {
    selector.css("background-color", getHighlight("autofillBackground"));
    selector.css("color", getColour("secondary"))
};

var moreHighlight = function (selector) {
    selector.css("background-color", getHighlight("errorBackground"))
}; //highlight background colour RED

var selectHighlight = function (selector) {
    selector.css("border-color", getColour("error"));
};//highlight border RED

var inputActive = function (selector) {
    selector.css("border-color", getColour("primary"))
};//border highlight for current input

var relatedInput = function (selector) {
    selector.css("background-color", getHighlight("relatedBackground"));
};//background highlight for related inputs

var resetBackground = function (selector) {
    selector.css("background-color", getDefault("inputBackground"));
};//reset normal input background to default

var changeBorder = function (selector, colour) {
    selector.css("border-color", colour);
};//change border colour

var resetBorder = function (selector) {
    changeBorder(selector, getDefault("border"))
};//reset input border to default


//total
var totalSelect = function (selector) {
    selector.css("background-color", getHighlight("autofillBackground"));
    selector.css("color", getDefault("text"));
    selector.css("border-color", getDefault("border"));
};

var totalActive = function (selector) {
    selector.css("border-color", getHighlight("totalBorder"));
    selector.css("color", getDefault("text"));
};

var sumtotalSelect = function (selector) {
    selector.css("background-color", getHighlight("autofillBackground"));
    selector.css("color", getColour("secondary"))
};

//error
var errorText = function (selector) {
    selector.css("color", getColour("error"));
};
var calcError = function (selector) {
    selector.css("background-color", getHighlight("errorBackground"))
    selector.css("border-color", getColour("error"));
};

//reset text color to black
var resetText = function (selector) {
    selector.css("color", getDefault("text"))
};

//----bulk formatting

//error:
var blurError = function (errorfield, message, totalField) {

    //total:
    totalSelect(totalField);
    //reset border of total field

    errorText(totalField);
    //highlight error text red in total field

    totalField.val("Enter " + message);
    //send help text to total field

    //error field:
    calcError(errorfield);
    //highlight field with error red
};

var focusError = function (errorfield, message, totalField) {

    //total:
    totalActive(totalField);
    //highlight border of total field

    errorText(totalField);
    //highlight error text red in total field

    totalField.val("Enter " + message);
    //send help text to total field

    //error field:
    calcError(errorfield);
    //highlight field with error red
};

//run reset functions
var fullReset = function (field) {
    resetBorder(field);
    //reset border to default

    resetBackground(field)
    //reset background to default
};

//highlight a field(s):
var highLight = function (border, background) {
    //both parameters optional, use "false" to skip that field

    if (background != false) {
        moreHighlight(background);
    };

    if (border != false) {
        selectHighlight(border)
    }
};//add highlights


var removehighLight = function (border, background) {
    //both parameters optional, use "false" to skip that field
    if (border != false) {
        inputActive(border)
    };

    if (background != false) {
        resetBackground(background);
    }


};//remove highlights - active input

var removehighLight2 = function (border, background) {
    //both parameters optional, use "false" to skip that field

    if (background != false) {
        resetBackground(background);
    };

    if (border != false) {
        resetBorder(border)
    }
};
//remove highlights - non active input

//blur page:
var pageBLur = function () {
    menu.blurElements.css("filter", "blur(3px)");
};

var pageClear = function () {
    menu.blurElements.css("filter", "none");
};

//------Animations:
//border highlight
var borderFlash = function (selector, flashColour) {

    //check if there is a border: 
    if (selector.css("border-style") == "none") {
        //if the element has no border
        var initialColour = "rgba(255, 0, 0, 0)";
        //set default border color to transparent
        selector.css("border", "2px solid " + initialColour);
        //add a border
        selector
            .queue(function () {
                selector.css("border-color", flashColour).dequeue();
            })
            .delay(200)
            .queue(function () {
                selector.css("border-color", initialColour).dequeue();
            })
            .delay(100)
            .queue(function () {
                selector.css("border-color", flashColour).dequeue();
            })
            .delay(200)
            .queue(function () {
                selector.css("border-color", initialColour).dequeue();
            })
            .queue(function () {
                selector.css("border-style", "none").dequeue()
            });

    } else {
        //otherwise get the border colour 
        var initialColour = selector.css("border-color");
        //border colour as variable

        selector
            .queue(function () {
                selector.css("border-color", flashColour).dequeue();
            })
            .delay(200)
            .queue(function () {
                selector.css("border-color", initialColour).dequeue();
            })
            .delay(100)
            .queue(function () {
                selector.css("border-color", flashColour).dequeue();
            })
            .delay(200)
            .queue(function () {
                selector.css("border-color", initialColour).dequeue();
            });
    };
};

//hover highlight
var borderFlash2 = function (hoverSelectors, flashColour, flashSelector) {
    //hoverSelectors is an array    
    for (let selector of hoverSelectors) {
        let flasher = (flashSelector != undefined) ? jQuery(flashSelector) : jQuery(selector);
        jQuery(selector).mouseenter(function () {
            borderFlash(flasher, flashColour)
        })
    }
};

//------Question formatting:

//total row styling and display:
var totalRowFormat = function (non_blanks) {
    //Non-blanks are optional

    //selectors for last row:
    totalTables.forEach(function (id) {
        let totalRow = jQuery(id).find(".ChoiceStructure tbody tr:last-child");
        let inputsTotal = totalRow.find("input");
        let teTotal = totalRow.find("textarea");
        let input_fields = [inputsTotal, teTotal];

        /* totalRow.css("background-color", getColour("tertiary")); */
        totalRow.addClass("detailsTotal");
        for (let inputs of input_fields) {
            jQuery(inputs).css("font-weight", "bold");
            if (non_blanks != undefined) {
                //hide fields that don't need to be visible:
                jQuery(inputs).each(function () {
                    let currentTotal = jQuery(this);
                    let checkMatch = function (ref) {
                        return ref == jQuery(inputs).index(currentTotal)
                    };
                    if (non_blanks.find(checkMatch) == undefined) {
                        currentTotal.hide();
                    };
                });
            };

        };
    })

};

//total column styling and display
var totalColumnFormat = function (hasTotal, columns, parentarray,) {
    //has total = true for total row 
    //hasTotal = false for no total row
    //parent array is optional
    //colums is an array

    //selet the table rows
    let tableRow = jQuery(".ChoiceStructure tbody").find('tr');

    //set total rows to read only and formatting

    if (jQuery("#EndOfSurvey").length < 1) {
        tableRow.each(function () {
            let thisRow = jQuery(this);

            let Tablesize = tableRow.length - 1;
            //get number of rows as a 0 based 

            for (let column of columns) {
                if (parentarray != undefined) {
                    var thisInput = inputSelect(thisRow.find(columnSelect(column, parentarray)))
                } else {

                    var thisInput = inputSelect(thisRow.find(columnSelect(column)));
                };
                if (thisRow.index() == Tablesize && hasTotal === true) {
                    //if there is a total row

                    sumtotalSelect(thisInput)//sum total formatting

                } else { totalSelect(thisInput); } //total formatting    
                thisInput.prop("readonly", true);
            };
        });
    };
};

//clear trailing spaces for forms:
var cleanForm = function (target) {
    //target = this
    jQuery("#" + target.questionId + " input[type=text]").on('blur', function () {
        let me = jQuery(this);
        let cleanEntry = me.val().trim();
        me.val(cleanEntry);
    });
};

//Wellcome Contribution justification helper:
var formatWC = function (selectors) {
    //selectors passed in as array [%, justification field]
    let percentSelector = selectors[0];
    let justifySelector = selectors[1];

    let helpText = "Please explain the WC percentage";//help text

    //function to format fields
    let wcJustify = function () {



        if (percentSelector.val().replace(/%/g, "") != 100 && percentSelector.val().replace(/%/g, "") != "") {
            //if the WC field has been entered and isn't 100%

            if (justifySelector.val().length === 0 || justifySelector.val().includes(helpText)) {
                //when the comments box is empty or the helptext is present

                highLight(percentSelector, justifySelector)
                //highlight the justification input fiel

            } else {
                removehighLight2(percentSelector, justifySelector)
                //remove the highlight from justification input field
            };

            if (justifySelector.val().length === 0) {
                //when the comments box is empty
                justifySelector.val(helpText)
                //send the error help test to the comments box
            }
        } else {
            removehighLight2(percentSelector, justifySelector)
            //remove the highlight from justification input field

            if (justifySelector.val().includes(helpText)) {
                //if the helptext is prresent

                justifySelector.val("");
                //clear the help text
            };
        }
    };

    //onload:
    wcJustify();

    //event bound actions:
    for (let value of selectors) {
        value.on({
            keyup: function () {
                wcJustify();
            },
            focus: function () {
                if (value == justifySelector && justifySelector.val().includes(helpText)) {
                    //in the contibution justification field is clicked and the
                    //help text is there 
                    let text = justifySelector.val().replace(helpText, "")
                    justifySelector.val(text);
                    //clear the help text from the box if present
                }
            },
            blur: function () {
                wcJustify();
            }
        });
    };
};

//Character counter
var countText = function (selector, limit, target) {
    //limit and target are optional

    let Limit = (limit !== undefined) ? limit : 1000000000000;
    let field = jQuery(selector);
    let showCount = (target !== undefined) ? jQuery(target) : "";

    //get the number of characters entered:
    let loadCount = function () {
        return field.val().length;
    };

    //print count to question text:
    let setCount = function () {
        if (showCount.length > 0) {
            jQuery(".textCount").text(loadCount() + "/" + limit);
        };
    };

    setCount();//on load

    //update count when typing and alert if limit is reached 
    //or delete isn't being pressed:
    field.keyup(function (e) {
        let deleting = (e.keyCode == 8) ? true : (e.keyCode == 46) ? true : false;
        console.log("keycode", e.keyCode);
        console.log("deleting: ", deleting);

        setCount();
        if (loadCount() >= Limit && deleting == false) {

            alert("you have entered the maximum number of characters");
        }
    });
};

//6) theme formatting and functionality:
//set organisation name if blank or updated:
var setOrgName = function () {

    if (listeners.organisation.length === 0 && listeners.organisationName.length > 0
        || listeners.organisation != listeners.organisationName & listeners.organisationName.length > 0) {
        //when the organisation contact list value is blank the organisation contact field in question has been answered
        //or if the contact field has been answered and it is different to the one in the contact list

        Qualtrics.SurveyEngine.setEmbeddedData('organisation', listeners.organisationName);
        //set the value in the input field as the embedded data value
    } else if (listeners.organisationName.length == 0 && listeners.organisation == 0) {
        let placeholder = "your organisation"; //placeholder text
        Qualtrics.SurveyEngine.setEmbeddedData('organisation', placeholder);

        let defaultTitle = jQuery("#reportTitle").text().replace(placeholder, "");
        jQuery("#reportTitle").text(defaultTitle);
    };
};



//check if input is blank or 0
var checkNum = function (selector) {

    let status = (selector.val().replace(/,/g, "") == 0 || selector.val().replace(/,/g, "") == "")
        ? "B/0" : "Not B/0";
    return status
};

var checkBlank = function (value) {
    let type = typeof value;
    let status = "";

    switch (type) {
        case "string":
            status = (value.replace(/[^A-Z0-9]/ig, "").length === 0)
                ? "Blank" : "Not Blank";
            return status;
        case "number":
            status = (value.replace(/,|£/g, "").length === 0)
                ? "Blank" : "Not Blank";
            return status;
    };
};


var checkAll = function (filterList, action, skippers, breaker = "n/a") {
    let array = Object.entries(filterList);
    //skippers does not need to be provided:
    let skip = (typeof skippers == "object") ? skippers : [];

    let stopper = (typeof skippers == "string") ? skippers : breaker;

    //help text:
    let helper = "Please be aware the following sections are incomplete and need to be completed before you can submit:";
    var alertText = helper;

    let guidanceHTMLA = '<div class="helpText" id="check-Guidance"> <br/> <strong>';
    let guidanceHTMLB = "</strong>";
    var guidance = guidanceHTMLA + helper + guidanceHTMLB;//html

    for (let [key, value] of array) {
        if (key === stopper || key === array[array.length - 1][0]) {
            //if checking all filter questions the whole array breaker does not need to be provided
            break;
        } else if (skip.indexOf(key) > -1) {
            continue;
        };
        if (checkBlank(value) === "Blank") {
            alertText = alertText + "\n" + filterNames[key];
            guidance = guidance + "<br/>" + "- " + filterNames[key];
        };
    };

    switch (action) {
        case "alert":
            alert(alertText);
            break;
        case "guidance":
            if (jQuery("#EndOfSurvey").length < 1) {
                let items = guidance.replace(guidanceHTMLA, "").replace(helper, "").replace(guidanceHTMLB, "");;
                if (items.length > 0) {
                    //if any values have bee added to the list

                    guidance += '</div>';
                    jQuery(".check").append(guidance);
                    //add guidance txt to target div
                };
            }


            break;
        case "default":
            //remove default help text:

            guidance = guidance.replace(guidanceHTMLA, "").replace(helper, "").replace(guidanceHTMLB, "");
            return guidance
    };
};

//menubar scroll shadow
var menuScroll = function () {
    //add -- shadow when scrolling 

    jQuery(".Skin").scroll(function () {

        //selectors:progressBar
        let logo = jQuery("#LogoContainer");
        let pBar = progressBar.selectors.progressBar

        if (jQuery(".Skin").scrollTop() != 0) {
            //if the window is not at the scroll top

            //add box shadow
            pBar.css('-webkit-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            pBar.css('-moz-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            //progress bar

            logo.css('-webkit-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            logo.css('-moz-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            logo.css("box-shadow", "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px");
            //header

            //move the progress bar up
            pBar.animate({
                top: '35px',
            }, 100);

            //make the header smaller
            jQuery(".Skin #Logo img").animate({
                maxHeight: '25px'
            }, 100)


        } else {
            //otherwise
            //remove boxshadow
            pBar.css('-webkit-box-shadow', 'none');
            pBar.css('-moz-box-shadow', 'none');
            //prgressbar

            logo.css("box-shadow", "none");
            logo.css("-webkit-box-shadow", "none");
            logo.css("-moz-box-shadow", "none");
            //header

            //apply default size
            pBar.stop(true, true).css("top", "60px");
            //progressbar

            jQuery(".Skin #Logo img").stop(true, true).css("max-height", "50px");
            //header
        }
    });

};

//load page on scroll top:
var loadScrollPosition = function (scrollposition) {
    //scrollposition is an integer

    jQuery(".Skin").scrollTop(scrollposition);
};


//stop the scroll from hcnaging when  the question is clicked
var setScroll = function () {

    let scrollposition = "";
    //variable to track the scroll position

    jQuery(".QuestionBody").scroll(function () {
        scrollposition = jQuery(".QuestionBody").scrollLeft()

    });
    //track the scroll position

    let lockscroll = function () {
        jQuery(".QuestionBody").scrollLeft(scrollposition)
    }; // set the scroll position

    jQuery(".ChoiceStructure").on({
        click: function () {
            lockscroll();
        },
        focus: function () {
            lockscroll();
        }
    })

};

//shortcut labels for nav buttons:
var navlabels = function () {
    jQuery("#PreviousButton").attr('title', "Save and go Back 1 page (Ctrl + Alt + P)");
    jQuery("#NextButton").attr('title', "Save and go forward 1 page (Ctrl + Alt + N)");
};

//show questions
var loadPage = function () {
    jQuery(".Skin").css("visibility", "visible");
};

//broswer alert
var broswerAlert = function () {

    let text = "";

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    /* // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS; */

    let broswertest = {
        Opera: isOpera,
        Firefox: isFirefox,
        Safari: isSafari,
        InternetExplorer: isIE,
        Edge: isEdge,
        Chrome: isChrome
    };


    if (broswertest.Chrome === false && broswertest.Firefox === false) {
        let broswerName = "";
        if (broswertest.InternetExplorer === true) {
            broswerName = "Internet Explorer"
            text = "You are using " + broswerName + " this browser is not supported. We recommend switching to Chrome or Firefox"
        } else if (broswertest.Edge === true) {
            broswerName = "Edge"
        } else if (broswertest.Safari === true) {
            broswerName = "Safari"
        } else if (broswertest.Opera === true) {
            broswerName = "Opera"
        }

        if (broswertest.InternetExplorer === false) {
            text = "We've noticed that you are using " + broswerName + " for best results we recommend that you switch to Chrome or Firefox";
        };

        alert(text);
    };
};

//-------input-based Calculations:

//field calculation: subtract
//subtract inputted value from a "starting number" and update another field with that value
//for fields with unique parents
var fieldSub = function (calcField, targetField, startNumber) {
    //calcField and targetField = input field parents
    let input = inputSelect(jQuery(calcField));
    let target = inputSelect(jQuery(targetField));

    //subtract entered value from reference and print to target on keyup:
    input.keyup(function () {
        let field = jQuery(this);
        let amount = field.val();
        let unspent = startNumber.replace(/£|,/g, "") - amount.replace(/£|,/g, "");
        target.val(englishPounds(unspent));
    });
};

//-------print formatting:
var nullTag = function () {
    let inputs = jQuery(".ChoiceStructure:not(table) input.InputText");
    let wrappers = jQuery(".QuestionOuter");
    let alwaysPrint = [
        "QR~QID3~1", "QR~QID3~2", "QR~QID3~4", "QR~QID3~6",//Key contact form inputs IDs
        "QR~QID4", "QR~QID5",//summary Questions input IDs
        "QR~QID56~1", "QR~QID56~2", "QR~QID56~3", "QR~QID56~4"//financial contact form input IDs
    ];

    //add noPrint class to question wrapper where the input value is not 0/blank
    inputs.each(function () {
        let input = jQuery(this);
        let inputID = input.attr("id");

        if (alwaysPrint.toString().indexOf(inputID) < 0 &&
            checkNum(input) === "Not B/0") {
            for (let wrapper of wrappers) {
                if (inputID.split("~")[1] === jQuery(wrapper).attr("id")) {
                    jQuery(wrapper).addClass("noPrint");
                };
            };
        };
    });
};

/*----------------------SECTION 2: Display logic --------------------*/
//1) hide rows 
var hideRows = function (questionNumber, filters) {

    let summaryPage = (jQuery("#EndOfSurvey").length < 1) ? false : true;


    switch (summaryPage) {
        case false:
            console.log("hide rows: not summary page");
            let question = jQuery(".QuestionOuter");
            let filter = getFilters(questionNumber, filters);

            let rows = question.find("table.ChoiceStructure tbody tr");
            let isTotalQuestion = (totalTables.toString().indexOf(question.attr("id")) > -1) ? true : false;
            switch (isTotalQuestion) {
                case false:
                    console.log("hide rows: not total table");
                    rows.each(function () {
                        //function will loop through all rows in question
                        if (jQuery(this).index() >= filter) { jQuery(this).hide(); };
                    });
                    break;
                case true:
                    console.log("hide rows: total table");
                    let totalIndex = question.find(".ChoiceStructure tbody tr:last-child").index();
                    rows.each(function () {
                        //function will loop through all rows on page

                        //if the row number on the page is above the filter value
                        //it is hidden
                        if (jQuery(this).index() >= filter && jQuery(this).index() < totalIndex) {
                            jQuery(this).hide();
                        };
                    });
                    break;
            };
            break;

        case true:
            //logic will be if filter is x then apply y to details
            //need to do full mapping of questionIDs 
            //group all filter and details question id's into arrays
            console.log("hide rows: summary page");
            let allDetails = allQuestions("details");
            let allfilters = allQuestions("filters");


            allDetails.forEach(function (id) {
                let thisQuestion = jQuery(id);
                let myIndex = allDetails.indexOf(id);
                let myRows = thisQuestion.find("table.ChoiceStructure tbody tr");
                let isTotalQuestion = (totalTables.toString().indexOf(thisQuestion.attr("id")) > -1) ? true : false;

                //corresponding filter question
                let myFilter = jQuery(allfilters[myIndex]).find(".ChoiceStructure:not(table) input.InputText").val();


                switch (isTotalQuestion) {
                    case false:
                        myRows.each(function () {
                            //function will loop through all rows in question
                            if (jQuery(this).index() >= myFilter) { jQuery(this).hide(); };
                        });
                        break;
                    case true:
                        let totalIndex = thisQuestion.find(".ChoiceStructure tbody tr:last-child").index();
                        myRows.each(function () {
                            //function will loop through all rows on page

                            //if the row number on the page is above the filter value
                            //it is hidden
                            if (jQuery(this).index() >= myFilter && jQuery(this).index() < totalIndex) {

                                jQuery(this).hide();
                            };
                        });
                        break;
                };

            });
            break;
    };
};

//2) hide rows with total row
var hideRows2 = function (questionNumber, filters) {

    let rows = jQuery(".ChoiceStructure tbody").find("tr");
    let totalIndex = jQuery(".ChoiceStructure tbody tr:last-child").index();
    //select the table rows on the page with jQuery

    //run the function to get filter value 
    let filter = getFilters(questionNumber, filters);


    rows.each(function () {
        //function will loop through all rows on page

        //if the row number on the page is above the filter value
        //it is hidden
        if (jQuery(this).index() >= filter) {

            if (jQuery(this).index() == totalIndex) { return; };
            jQuery(this).hide();
        };
    })
};

//show extended submissions guidance text when filter > default rows for question 
var loadTemplate = function (filters, trigger = 30) {
    //if the filter is a selected choices value, use the amount of choices as the filter (by counting delimiter)
    let filter = (stringfilters.indexOf(filters) >= 0) ? filters.replace(/[0=9]|[a-z]/ig, "").length + 1 : filters;
    if (filter > trigger) {
        jQuery("#ExtendSubmissions").show();
    } else {
        jQuery("#ExtendSubmissions").hide();
    };
};

/*----------------------SECTION 3: Buttons ans shortcuts--------------------------*/
//1) nav button switchers:
//simple rename next button:
var nextbuttonDefault = function (nextBtn) {
    //select the next button
    let nb = jQuery("#NextButton");
    //update next button text
    jQuery(nb).val(nextBtn);
};

//simple rename previous button:
var prevbuttonDefault = function (prevBtn) {
    let pb = jQuery("#PreviousButton");
    jQuery(pb).val(prevBtn);
};

//next button switchers:
var nextbuttonSwitch = function (detailsBtn, nextBtn, input) {
    //input is optional

    let nb = jQuery("#NextButton");//select the next button

    let selector = (input == undefined) ? jQuery("input") : input;
    //define the selector for listener

    if (selector.val().replace(/,/g, "") > 0) {
        //use replace() to extract commas from cleave

        // when filter is above 0 replace button text
        //with details question
        jQuery(nb).val(detailsBtn);
    } else {
        jQuery(nb).val(nextBtn);
    }
};//basic

var clickSwitch = function (buttons, wrapperID, optionindex) {
    //buttons is an array: [next button text, details button text]
    //option index is the option index (1 based) of the trigger question e.g.
    //yes (1)
    //maybe (2)
    //no(3)

    jQuery(wrapperID).click(function () {
        //when the question is clicked

        if (jQuery(wrapperID).find('input[value="' + optionindex + '"]:checked').length > 0) {
            //if yes is selected

            nextbuttonDefault(sections[buttons[1]])
            //update next button to "details"
        } else {
            nextbuttonDefault(sections[buttons[0]])
            //otherwise set to "next"
        }
    })
};//on click

var loadSwitch = function (direction, buttoninfo, filterArray) {


    /* if (direction == "next") {
        action = nextbuttonDefault
    } else if (direction == "back") {
        action = prevbuttonDefault
    }; */
    //function to set filter logical
    let setFilter = function (index) {

        if (stringfilters.indexOf(buttoninfo[index]) > -1 && buttoninfo[index] === "SixBD") {
            //if the current  button reference is in stringfilters

            var filter = (filterArray[buttoninfo[index]].length > 0) ? true : false;
            //do logical based on string length

        } else if (stringfilters.indexOf(buttoninfo[index]) > -1 && buttoninfo[index] !== "SixBD") {
            var filter = (filterArray[buttoninfo[index]].includes("Yes")) ? true : false;
            //check filter for "yes"
        } else {
            var filter = (filterArray[buttoninfo[index]] > 0) ? true : false;
            //otherwise use the size of the integer
        };

        return filter
    };

    //define the actio and order to check the 
    //button info to run depending on direction
    switch (direction) {
        case 'next':
            var action = nextbuttonDefault;
            var checkOrder = (buttoninfo.length === 3) ? [1, 0, 2] : [0, 1];
            break;
        case 'back':
            var action = prevbuttonDefault;
            var checkOrder = (buttoninfo.length === 3) ? [0, 1, 2] : [0, 1];
            break;
    };

    if (buttoninfo.length == 2) {
        //if 2 button values have been provided
        if (setFilter(checkOrder[0])) {
            //if filter value/length is greater than 0,

            action(sections[buttoninfo[checkOrder[0]]]);
            // use the button text for the first reference
        } else {
            //otherwise

            action(sections[buttoninfo[checkOrder[1]]]);
            //use the button text for teh second reference
        };
    } else if (buttoninfo.length == 3) {
        if (setFilter(checkOrder[0])) {
            //if filter 1 value/length is greater than 0,

            action(sections[buttoninfo[checkOrder[0]]])
            // use the button text for the first reference
        } else if (setFilter(checkOrder[1])) {
            //otherwise if filter 2 value/length is greater than 0,

            action(sections[buttoninfo[checkOrder[1]]])
            //use the button text for the third reference
        } else {
            action(sections[buttoninfo[checkOrder[2]]])
        }
    }
};

var keyupSwitch = function (buttons) {
    //on page load:
    let i = jQuery(".ChoiceStructure input");
    //array of inputs on the page excluding the next buttons

    //set array indecies for nextbuttonSwitch function:
    let Buttons = (buttons.length > 2) ? buttons.reverse() : buttons;
    //if more than 2 inputs on page flip buttons array so that it 
    //can still work with loadSwitch method syntax

    let nextIndex = (buttons.length > 2) ? 0 : 1;
    //set next index depending on the number of buttons provided

    let switcher = (buttons.length > 2) ? "multiple" : "default";

    //on keyup:
    i.keyup(function (e) {
        if (e.keyCode !== 13) {
            //when enter isn't pressed 
            let I = jQuery(this);

            let checkI = checkNum(I);

            //define conditional variables:
            let Index = (buttons.length > 2) ? i.index(I) + 1 : i.index(I); //index of current input

            // define arrays for comparison:
            let first = i.filter(function () {

                let actualIndex = (buttons.length > 2) ? Index - 1 : Index;
                //undo index increase if more than 3 inputs

                return i.index(jQuery(this)) < actualIndex
            });//inputs which appear before the current one

            let firstBlanks = filterBlanks2(first);
            //blank inputs which appear before the current one

            //shorthand nextbutton switch:   
            let action = function (details, next, field) {
                //(parameters = Buttons lookup indecies):

                let input = (field === undefined) ? I : field;
                //if field is not specified use current input

                nextbuttonSwitch(sections[Buttons[details]], sections[Buttons[next]], input);
            };

            //switch case of actions:
            switch (switcher) {
                case "multiple":
                    //with more than one input field on the the page

                    if (Index > 1 && firstBlanks.length == first.length) {
                        //if this isn't the first input and all the previous inputs are blank 
                        action(Index, nextIndex);

                    } else if (Index == 1) {
                        //or if this is the first input

                        switch (checkI) {
                            case "B/0":

                                let i1 = i.eq(0); //this field
                                let others = i.not(i1); //all other fields

                                let otherBlanks = filterBlanks(others);
                                //other non-blank/0 fields

                                if (otherBlanks.length < others.length) {
                                    //when one of the other fields is not blank/0

                                    //get the next non-blank field:
                                    let nB = getNotBlank2(i);//other non-blanks

                                    let InB = others.index(nB.eq(0)) + 2;
                                    //index of next non-blank field, adjusted to grab key 
                                    //from buttons array

                                    action(InB, nextIndex, nB.eq(0));
                                    //run action on next blank field instead of this one
                                } else {
                                    action(Index, nextIndex);
                                }
                                break;
                            default:

                                action(Index, nextIndex);
                        };
                    };
                    break;
                default:
                    action(Index, nextIndex);
            };
        };
    })
};

var checkOnly = function () {

    jQuery("#NextButton").click(function () {

        if (jQuery("#EndOfSurvey").length < 1) {
            //when not the end of survey summary page

            let check = checkAll(filterList, "default", ["SixBD", "ElevenD2"]);
            //get all blank questions

            if (check.length > 0) {
                //if any questions are blank


                Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Stop");
                question.disableNextButton();

                //alert on load:
                checkAll(filterList, "alert", ["SixBD", "ElevenD2"], breaker);

                let hovertext = "Please complete all sections of this report in order to continue";
                //add help text on hover:
                hoverTextAdd(jQuery("#Buttons"), hovertext, [jQuery("#PreviousButton")]);
            } else {

                if (listeners.hotkeyNavigate == "Stop") {
                    Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
                };
            };
        } else {
            Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
        };
    })
};

//disable next
var nextCheck = function (filterList, question, blockNext, breaker) {

    if (jQuery("#EndOfSurvey").length < 1) {
        //when not the end of survey summary page

        let check = checkAll(filterList, "default", ["SixBD", "ElevenD2"], breaker);
        //get all blank questions

        if (check.length > 0 && blockNext === true) {
            //if any questions are blank
            Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Stop");
            nextbuttonDefault("Report incomplete!");
            question.disableNextButton();


            //alert on load:
            checkAll(filterList, "alert", ["SixBD", "ElevenD2"], breaker);

            let hovertext = "Please complete all sections of this report in order to continue";
            //add help text on hover:
            hoverTextAdd(jQuery("#Buttons"), hovertext, [jQuery("#PreviousButton")]);
        } else {

            if (listeners.hotkeyNavigate == "Stop") {
                Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
            };
            question.enableNextButton();
        };
    } else {
        Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
    };

    jQuery("#PreviousButton").click(function () {
        Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
    });
}

//---------------copy button
var copyButton = function (buttonSelector, copySelector) {
    //console.log("buttonSelector #: ", buttonSelector.lastIndexOf(""));

    jQuery(buttonSelector).click(function () {
        let copyText =
            (copySelector.lastIndexOf("#") > buttonSelector.lastIndexOf("."))
                ? document.getElementById(copySelector.replace(/#/g, "")) : document.getElementsByClassName(copySelector.replace(/./g, ""));
        copyText.select();
        //copyText.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert("our contact e-mail has been copied");

        console.log(copyText.value);
    })
};

//2) Sideways scroller for matrices (ADD ON READY):


var sideScrollButtons = function (element_being_scrolled, load_Target, hoverText) {
    //load target and hover text are optional

    let parameters = [element_being_scrolled, load_Target, hoverText];
    let hoverYN = parameters.filter(entry => typeof (entry) === Boolean);

    if (jQuery(".SBSMatrix").length > 0) {
        //add the html to question text:
        jQuery('<div class="Scroll--left">←</div><div class="Scroll--right">→</div>').appendTo("body")
        //scrolling status boolean:
        var scrolling = false;
        if (hoverYN[0] != undefined && hoverText === true && hoverYN.length > 0) {
            //if hover text is turned on 
            //hover test as object:
            var hoverText = {
                left: "scroll left",
                right: "scroll right"
            };
            //add hover text to buttons:
            hoverTextAdd(jQuery(".Scroll--right"), hoverText["right"]) //right
            hoverTextAdd(jQuery(this), hoverText["left"]) //left k
        };

        //looping scroll function:
        function scrollTable(direction) {
            let leftPos = element_being_scrolled.scrollLeft();//initial position
            let speed = 10;//20 = fast, 10 = medium, 5 = slow
            let scrollValue = (direction === "left" ? leftPos - speed : leftPos + speed);

            element_being_scrolled
                .stop(true, true) //stop other animations in queue
                .animate({
                    scrollLeft: scrollValue
                }, 1, function () {
                    if (scrolling) {
                        //loop while hovering
                        scrollTable(direction);
                    };
                });
        };

        let scroll_Buttons = [
            jQuery('.Scroll--left'),
            jQuery('.Scroll--right')
        ];

        //get page and table widths in px
        let tablewidth = jQuery("table.ChoiceStructure").width();
        let tableWrapperWidth = jQuery("div .SBSMatrix").width();

        //if more than 30 rows displayed, load when 2 rows are visible. Otherwise 10%
        let tablelength = jQuery(load_Target).find("tr").length;
        let load = (tablelength > 30) ? 2 / tablelength : 0.1;

        //function to display load buttons when target is in view:
        let observer = new IntersectionObserver(function (entries) {
            if (entries[0]['isIntersecting'] == true && tablewidth > tableWrapperWidth) {
                //when the load target is in view:
                jQuery('.Scroll--left')
                    .on({
                        mouseover: function () {
                            scrolling = true;
                            scrollTable("left");
                        },
                        mouseout: function () {
                            scrolling = false
                        }
                    })
                    .stop(true, true)
                    .fadeIn('slow'); //load the button

                jQuery('.Scroll--right')
                    .on({
                        mouseover: function () {
                            scrolling = true;
                            scrollTable("right");
                        },
                        mouseout: function () {
                            scrolling = false
                        }
                    })
                    .stop(true, true) //stop other animations in queue
                    .fadeIn('slow'); //load the button
                for (let value of scroll_Buttons) {
                    borderFlash(value, getColour("error"))
                };
            } else {
                for (let value of scroll_Buttons) {
                    value.stop(true, true).remove();
                };
            };
        }, {
            threshold: [load] //load when target 2 rows are in view
        });
        observer.observe(document.querySelector(load_Target));
    };
};

//3) nav & shortcuts:
//navigation hot keys

var hotkeyNavigate = function (question, Enablewarning) {
    //question = this
    //EnableWarning = Boolean
    let warn = (Enablewarning == undefined) ? true : false;
    let pressedKeys = [];//track pressed keys (and order pressed)
    let input_fields = jQuery(".ChoiceStructure input");/* (jQuery(".ChoiceStructure input").length > 0)
        ? jQuery(".ChoiceStructure input") : jQuery(".ChoiceStructure textarea") */;//select input fields
    //alert text:
    let warning = "You will need to complete this section, or any sections highlighted below before you submit your report";

    //alert when next button is clicked:
    jQuery("#NextButton").one("click", function () {
        switch (jQuery(".matrixQText").length) {
            case 0: //for non-detail questions
                let blank_inputs = filterBlanks(input_fields).length;
                if (blank_inputs > 0 && jQuery(".guidancePage").length < 1 && warn === true) {
                    pressedKeys = [];
                    alert(warning);//give completion warning
                };
                break;
        };
    });
    //shortcuts:
    jQuery(document) //applies to whole page
        .keydown(function (e) {
            pressedKeys.push(e.keyCode);
            //add the pressed key to pressedKeys array
            switch (jQuery(".matrixQText").length) { //for non-detail questions
                case 0:
                    if (pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 78 && jQuery("#NextButton").length && listeners.hotkeyNavigate == "Go") {
                        //if CTRL + ALT + N are pressed in sequence and the next button is present:
                        pressedKeys = [];
                        jQuery("#NextButton").trigger("click");// click the next button
                        //move to next question
                    } else if ((pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 80) && jQuery("#PreviousButton").length) {
                        //if CTRL + ALT + P are pressed in sequence and the previous button is present:    
                        pressedKeys = [];
                        question.clickPreviousButton();
                        //move to previous question
                    };
                    break;

                default:
                    if (pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 78 && jQuery("#NextButton").length) {
                        //if CTRL + ALT + N are pressed in sequence and the next button is present:
                        pressedKeys = [];
                        question.clickNextButton();
                        //move to next question
                    } else if ((pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 80) && jQuery("#PreviousButton").length) {
                        //if CTRL + ALT + P are pressed in sequence and the previous button is present: 
                        pressedKeys = [];
                        question.clickPreviousButton();
                        //move to previous question
                    };
            }
        })
        .keyup(function () {
            pressedKeys = [];
        });
    //press enter to submit on filter questions:
    input_fields.keyup(function (e) {
        if (jQuery(".matrixQText").length < 1 && e.keyCode == 13) {
            //if there is not matrix question and ENTER is oressed
            pressedKeys = [];
            jQuery("#NextButton").trigger("click");//click the next button
        };
    });
};

//enable hotkey navigate
var navReset = function () {
    Qualtrics.SurveyEngine.setEmbeddedData('hotKeyNav', "Go");
};

//skip last check reminder - declaration download page
var checkSkip1 = function (direction, directioncode) {
    if (direction > 0) {
        //if direction is above 0
        Qualtrics.SurveyEngine.setEmbeddedData('checkReminder', directioncode);
        //set direction: 1= left  2 = go right
    };
};

var checkSkip2 = function (direction, target) {

    let noButton = function () {
        target.hideNextButton();
        target.hidePreviousButton()
    };

    if (direction == 2 && jQuery(".ResponseSummary").length == 0) {
        //go forward if 2
        noButton();

        target.clickNextButton();
    } else if (direction == 1 && jQuery(".ResponseSummary").length == 0) {
        //go backward if 1
        noButton;
        target.clickPreviousButton();
    }
};

//4 page printing:
var printPage = function () {
    pageClear();
    jQuery("#Plug").hide();
    jQuery(".Skin").scrollTop(0); //ensures table headers display properly
    menu.menu.hide();
    window.print();
};

//5) Accessibility
//make elements tabable
var tabMe = function (selectors, index) {
    //selectors can be a string e.g. ".someClass" or and array of strings 
    //e.g. ['#someID1', '#someID2', etc...]
    //index is optional, use number for singular case, use start number for list case
    let check = typeof selectors;
    switch (check) {
        case "string":
            let order = (index === undefined) ? "" : " tabindex='" + index + "' ";
            jQuery(selectors).wrap("<a" + order + "href='#'></a>");
            break;
        case "object":
            for (let selector in selectors) {
                let order = (index === undefined) ? selector + 1 : index + selector + 1;
                let wrapper = "<a tabindex='" + order + "' href='#'></a>";
                jQuery(selectors[selector]).wrap(wrapper);
                break;
            };
    };
};

//---------------------SECTION 4: WIDGETS ------------------

//1) date picker:
var loadDatePicker = function (question) {
    if (jQuery("#EndOfSurvey").length === 0) {
        let dateRef = columnSelect(question, dateColumnsAll);
        let qRows = jQuery(".ChoiceStructure tbody").find("tr");

        qRows.each(function () {
            let datePickerCell = jQuery(this);

            let foopicker = new FooPicker({ //run FooPicker
                id: inputSelect(datePickerCell.find(dateRef)).attr('id'),
                dateFormat: 'dd/MM/yyyy'
            });
        });
    };
};

//2) Hover text

//basic hover text builder function:
var hoverTextAdd = function (selector, helpText, hiders = false) {
    selector.hover(function () {
        // Hover over code
        jQuery('<p class="tooltip"></p>')
            .text(helpText)
            .appendTo('body')
            .fadeIn('slow');

    }, function () {
        // Hover out code
        jQuery('.tooltip').remove();

    }).mousemove(function (e) {
        var mousex = e.pageX + 5; //Get X coordinates
        var mousey = e.pageY + 2; //Get Y coordinates
        jQuery('.tooltip')
            .css({ top: mousey, left: mousex })
    });

    if (hiders !== false) {
        for (let hider of hiders) {
            hider.hover(function () {
                jQuery('.tooltip').remove();
            })
        }
    };
};

//set hover text on matrix tables:
var setHoverText = function (question, filterlist) {
    //define the master arrays for each question type if present
    let labelarray = columnNames[question];

    if (labelarray["input"] !== undefined) {
        var allInputs = Object.entries(labelarray["input"])
    };//<input>

    if (labelarray["textarea"] !== undefined) {
        var allTextareas = Object.entries(labelarray["textarea"])
    };//<textarea>

    if (labelarray["select"] !== undefined) {
        var allSelects = Object.entries(labelarray["select"])
    };//<select>

    //function to set hovertext and build selector
    let setHoverText = function (column_nth_index, hover_text, row) {
        //define selector
        let thisColumn = columnSelect(column_nth_index);
        let thisInput = row.find(thisColumn);
        //select current child using nth key

        //get the hover text
        hoverTextAdd(thisInput, hover_text);
    };

    //select the rows
    var getTRow = jQuery(".ChoiceStructure tbody tr");

    //apply hover text 
    getTRow.each(function () {
        var thisHrow = jQuery(this);

        let filter = getFilters(question, filterlist);

        if (thisHrow.index() > 2 && filter > 3) {
            //show for rows 3 and over

            if (allInputs !== undefined) {
                //set hover text for each question type using keys
                for (let [key, value] of allInputs) {
                    setHoverText(key, value, thisHrow);
                    //run for inputs
                };
            };//inputs
            if (allSelects !== undefined) {
                for (let [key, value] of allSelects) {
                    setHoverText(key, value, thisHrow);
                    //run for selects
                };
            };//selects
            if (allTextareas !== undefined) {

                for (let [key, value] of allTextareas) {
                    setHoverText(key, value, thisHrow);
                    //run for textareas
                };
            };//textareas
        }
    });
};

//3 menu button
var menu = {
    Button: jQuery("#Logo img, :focus"),
    /*     ButtonTab: jQuery("#Logo a"), */
    Height: (jQuery("#reportTitle").text().includes("Retention")) ? "191px" : "343px",
    menu: jQuery("#navOuter"),
    List: jQuery(".navTable"),
    menuItem: jQuery(".menuLink"),
    blurElements: jQuery("#SkinContent, #reportTitle, #Logo img")//page, title and menu respectively
};

var loadMenu = function () {
    let menuSwitch = "off";
    //functions to open and close the menu:
    let showMenu = function () {
        //show menu animations:
        pageBLur();
        menu.menu.css("display", "inline-block").fadeIn("100");//make menu visible
        menu.menu.animate({ height: menu.Height, display: 'inline-block' }, 250);//open menu container
        menu.List.show(200);
        menuSwitch = "on";
    };
    let hideMenu = function () {
        //close menu animations:
        pageClear();
        menu.List.hide();//hide menu items
        menu.menu.animate({ height: '0px' }, 100);
        menuSwitch = "off";
    };

    //launch link/action when clicknig anywhere on the menu item
    menu.menuItem.click(function () {
        jQuery(this).find("a").click();
    });

    menu.Button.unbind('click').click(function () {
        switch (menuSwitch) {
            case "off":
                showMenu();
                break;
            case "on":
                hideMenu();
                break;
        };
    });

    //hide menu when leaving the menu with mouse
    menu.menu.mouseleave(function () {
        hideMenu();
    });

    //hide menu when click outside of menu
    jQuery(document).mouseup(e => {
        if (!menu.menu.is(e.target) // if the target of the click isn't the container...
            && menu.menu.has(e.target).length === 0 // ... nor a descendant of the container
            && !menu.Button.is(e.target)) //nor the menu button
        { hideMenu(); };
    });


    //Accessibility:
    jQuery(document).keydown(function (e) {
        //close menu with Esc key
        if (menuSwitch === "on" && e.keycode == 27) {
            hideMenu();
        };

        //open menu with Enter key
        if (jQuery(document.activeElement).toString().indexOf("Logo a") > -1 && e.keycode == 13) {
            showMenu()
        };
    });
};

//Progressbar show-hide
var progressBar = {
    selectors: {
        ptoggle: jQuery("#pdButton"),//wrapper
        toggleSwitch: jQuery("#toggle-switcher"), //toggle
        toggleArea: jQuery(".toggle-button"),//toggle track
        progressBar: jQuery(".ProgressBarContainer")//progress bar
    },
    toggle: {
        off: function () {
            //toggle switch to off position:
            progressBar.selectors.toggleArea.css("background-color", "white");
            progressBar.selectors.toggleSwitch.css("background-color", "#f1f1f1");
            progressBar.selectors.toggleSwitch.css("left", "0");
            progressBar.selectors.progressBar.hide(100);
        },
        on: function () {
            //toggle switch to on position:
            progressBar.selectors.toggleArea.css("background-color", getColour("secondary"));
            progressBar.selectors.toggleSwitch.css("background-color", getColour("secondary"));
            progressBar.selectors.toggleSwitch.css("left", "16px");
            progressBar.selectors.progressBar.show(200);
        }
    },
    switcher: function (listener) {
        //listener  =  piped text code for embeded data used to track off/on status
        //accepts string values "off" and "on". default value is "on"

        let pbIO = listener;

        //load
        if (listener == "off") {
            this.toggle.off();
        };

        //toggle
        this.selectors.ptoggle.click(function () {
            switch (pbIO) {
                case "off":
                    progressBar.toggle.on();;
                    pbIO = "on";
                    return pbIO;
                case "on":
                    progressBar.toggle.off();
                    pbIO = "off";
                    return pbIO;
            };
            //send value to embedded data
            Qualtrics.SurveyEngine.setEmbeddedData('progressBar', pbIO);
            let newembeddedval = Qualtrics.SurveyEngine.getEmbeddedData('progressBar', pbIO);
            console.log({ listener }, { pbIO }, { newembeddedval });
        });
    }
};

//--------------------Section 5: Question specific
//1) 3A buttons on click
/* var buttons3a = function (NPF_cloumn, detailsRef, nextRef) {
 
    let table = jQuery(".QuestionBody");
 
    table.on("click keyup", function () {
        var fRolling = 0;
        var fCount = 0;
 
        table.find("tbody tr").each(function () {
 
            var npfSelect = selectSelect(jQuery(this).find(columnSelect(NPF_cloumn)));
            //select the dropdown 
 
            if (npfSelect.val() == 2) {
                //if F is selected add 1 to thr olling tally
 
                var fTally = 1;
            } else {
                //otherwise add nothing
 
                var fTally = 0;
            };
            //rolling calcs:
            fCount += fTally,
                fRolling += fCount;
 
            if (fRolling > 0) {
                //if 1 or more Fs are selected
 
                nextbuttonDefault(sections[detailsRef]);
                //set button text to "details"
            } else {
                //otherwise keep as "next"
                nextbuttonDefault(sections[nextRef]);
            }
        })
    });
}; */
// 2) 3B Filed patents carry forward :
var carry3b = function (answerlist) {
    //select the array for each answer field
    let awardNo = answerlist["awardNo"];
    let NPF = answerlist["NPF"];
    let uniqueID = answerlist["uniqueID"];
    let inventors = answerlist["inventors"];

    let allRows = detailsSelect("ThreeB").find("tbody tr");
    allRows.each(function () {
        let thisRow = jQuery(this);
        let rowindex = thisRow.index();
        let header = thisRow.find("th");

        //define values for row
        let aNo = awardNo[rowindex];//award No.
        let uID = uniqueID[rowindex];//org ref
        let nIn = inventors[rowindex];//inventors
        let nPF = NPF[rowindex];//Patent app status

        if (nPF == "F") {
            //define the fields + input selector
            var awardN = thisRow.find("td:nth-child(4)");
            var awardNoIpt = textareaselect(awardN);

            var uniqueI = thisRow.find("td:nth-child(7)");
            var uniqueIDIpt = inputSelect(uniqueI);

            var invs = thisRow.find("td:nth-child(10)");
            var inventorsIpt = textareaselect(invs);

            //set values and format the fields
            awardNoIpt.val(aNo);
            autofillCSS(awardNoIpt);
            //award number

            uniqueIDIpt.val(uID);
            autofillCSS(uniqueIDIpt);
            //unique ID (Org reference)

            inventorsIpt.val(nIn);
            autofillCSS(inventorsIpt);
            //named inventors
        } else if (header.text().replace(/ /g, "") == "") {
            //set row label to number when carried value is blank
            let rowNumber = rowindex + 1;
            header.append(rowNumber);
        } else {
            //overwrite the carried text with row number
            let rowNumber = rowindex + 1;
            header.text(header.text().replace(header.text(), rowNumber));
            console.log("header adjusted, new heade for row ", rowNumber, " is: ", header.text());
        };
    });
};

//3) 6 New transacions display formatting
var format6 = function (formatting_columnRefs) {
    var get6Table = jQuery(".ChoiceStructure");
    var get6Row = get6Table.find('tbody tr');

    //empty variable to get current scroll position



    //2 formating on click, blur and mouseup
    get6Row.each(function () {
        var inputs6 = jQuery(this);

        //selectors:
        //other (transaction type - check box):
        var other_tType = inputs6.find(columnSelect("transactionType", formatting_columnRefs));
        //table column

        var oCB = other_tType.find('input[type="checkbox"]');
        //select checkbox 

        var chL = other_tType.find("label.q-checkbox");
        //selet label for higlighting

        //comments box textarea:
        var more_detail = inputs6.find(columnSelect("moreInfo", formatting_columnRefs));
        //table column
        var mdTE = textareaselect(more_detail);
        //textareas


        //oter transaction type

        //function to format "other" transaction type check box and  cmoments box
        let formatOthertrans = function () {
            if (oCB.prop("checked") == true) {
                //if other transaction type is checked:

                if (mdTE.val().length === 0) {
                    //when the comments box is also blank

                    highLight(chL, mdTE);
                    //highlight fields

                } else {

                    removehighLight(chL, mdTE);
                    //otherwise remove highlights
                }

            } else if (oCB.prop("checked") == false) {
                //if other transaction type is  not checked:

                removehighLight2(chL, mdTE);
                //remove highlights
            };
        };

        //format on load:
        formatOthertrans();

        //when checkbox is clicked:
        oCB.click(function () {
            formatOthertrans();

        });

        //on keyup and blur for text areaa:
        mdTE.on({

            keyup: function () {
                formatOthertrans();
            },

            blur: function () {
                formatOthertrans();
            }
        });

        //no executed agreement
        let hasAgreement = selectSelect(inputs6.find(columnSelect("exAgreement", formatting_columnRefs)));

        let noInfobox = textareaselect(inputs6.find(columnSelect("noInfo", formatting_columnRefs)));

        //function to format DO you have executed agreemnts box and comments field:
        let formathasAgreement = function () {
            if (hasAgreement.val() == "2") {
                //if "No" is selected

                if (noInfobox.val().length === 0) {
                    //when the comments box is also blank

                    highLight(hasAgreement, noInfobox);
                    //highlight fields

                } else {

                    removehighLight(hasAgreement, noInfobox);
                    //otherwise remove highlights
                }

            } else {
                removehighLight(hasAgreement, noInfobox);
                //otherwise remove highlights
            }
        };
        //function to reset fields and clear formatting - use on blur
        let clearFormatHA = function () {
            if (hasAgreement.val() != "2" || hasAgreement.val() == "2" && noInfobox.val().length > 0) {
                // if no is not selected,
                // or no is selected and the comments box is filled in
                removehighLight2(hasAgreement, noInfobox);
            };
        };

        //formatting on load:
        formathasAgreement();//helpers
        clearFormatHA();//resetter

        //DO you have the executed agreement? dropdown:
        hasAgreement.on({
            click: function () {
                formathasAgreement();//formatting helpers
            },

            blur: function () {
                clearFormatHA();//reset formatting 
            }
        });

        //more information box
        noInfobox.on({
            keyup: function () {
                formathasAgreement();//formatting helpers
            },
            blur: function () {
                formathasAgreement();
                clearFormatHA();//reset formatting 
            }
        })


    });

};


//4) 6A Buttons on click:
var buttons6a = function (next, details) {
    var table6b = jQuery(".QuestionBody");

    table6b.click(function () {

        //rolling counts:
        var yesRolling = 0;
        var yesCount = 0;

        table6b.find("tbody tr").each(function () {

            let aSelect = selectSelect(jQuery(this).find(columnSelect("30")));
            //selector for dropdwon 

            if (aSelect.val() == 1) {
                //if yes is selected

                var yTally = 1;
                //add 1 to the rollling count
            } else {
                //otherwise

                var yTally = 0;
                //add nothing
            };

            yesCount += yTally;

            yesRolling += yesCount;

            if (yesRolling > 0) {
                //if yes is selected 1 or more times

                nextbuttonDefault(sections[details]);
                //next button changes to "upload supporting documents"
            } else {
                //otherwise

                nextbuttonDefault(sections[next]);
                ////next button changes to "Section 7: Other live agreements"
            };
        });
    });
};
//4) 6 new transactions upload carry forward
var carry6 = function (answerlist) {
    //define array within object as a variable for each answer field,
    //replace any line breaks with a space
    let uniqueID = answerlist["uniqueID"];
    let counterParty = answerlist["counterParty"];
    let effectiveDate = answerlist["effectiveDate"];

    //define the Question IDs as an array - to be used with string.find() 
    let IDs = answerlist["questionIDs"];

    jQuery(".QuestionOuter").each(function () {
        let thisQContainer = jQuery(this);
        let thisID = thisQContainer.attr("id");
        //get class and  id as a string e.g. "QuestionOuter BorderColor FileUpload  QID174"

        for (let ID in IDs) {
            // loop through question Ids

            if (thisID == IDs[ID]) {
                //if the key value is present in the class:

                //define the target <span> elements as variable
                //selecting them by id
                let thisRef = thisQContainer.find(".orgRef");//Organsation reference
                let thisParty = thisQContainer.find(".counterParty"); //Counterparty
                let thisDate = thisQContainer.find(".effectiveDate"); //effective date

                //append the piped text value from the map to target <span>:
                thisRef.append(uniqueID[ID].replace(/\r?\n|\r/g, "") + "'"); //Organsation reference
                thisParty.append(counterParty[ID].replace(/(\r\n|\n|\r)/gm, "") + "'"); //Counterparty
                thisDate.append(effectiveDate[ID].replace(/\r?\n|\r/g, "") + ")"); //effective date
            };
        };
    });
};

//3) 10 Revenue calctable formatting:
var revenueFormatting = function (parentarray) {

    detailsSelect("ElevenD").find(".ChoiceStructure tbody tr").each(function () {
        //for each table row:
        let inputs = jQuery(this);
        //selector for current row

        //define and map inputs:
        let incomeGrossInput = inputSelect(inputs.find(columnSelect("incomeGrossRef", parentarray))); //gross income
        let directCostsInput = inputSelect(inputs.find(columnSelect("directCostsRef", parentarray))); //direct costs
        let contributionWTInput = inputSelect(inputs.find(columnSelect("contributionWTRef", parentarray))); //WT contribution %
        let contributionJustInput = textareaselect(inputs.find(columnSelect("contributionJust", parentarray))); //WT contribution Justification

        let revShareWTInput = inputSelect(inputs.find(columnSelect("revShareWTRef", parentarray))); //WT revenue share %
        let selectorFieldRN = inputSelect(inputs.find(columnSelect("revNetRef", parentarray))); //net revenue
        let selectorFieldRA = inputSelect(inputs.find(columnSelect("revWTRef", parentarray))); //revenue attributable to WT

        //create arrays for looping:
        let netcalcFields = [incomeGrossInput, directCostsInput];//net revenue
        let attCalcfields = [revShareWTInput, contributionWTInput];//% for revenue attributable
        let allCalcFields = netcalcFields.concat(attCalcfields);
        //calculation input fields

        //calc formatting
        for (let value of allCalcFields) {

            //formatting functions
            let focusFormat = function () {
                for (let value of netcalcFields) {
                    //remove '£' from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/£/g, ""));
                };

                for (let value of attCalcfields) {
                    //remove % from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/%/g, ""));
                };
                inputActive(value);
                //highlight border of active current input

                //get blank and non-blank fields as arrays:
                let attBlanks = getBlank(attCalcfields);
                let attNotBlanks = getNotBlank(attCalcfields);
                //att calc fields

                let calcBlanks = getBlank(allCalcFields);
                let calcNotBlanks = getNotBlank(allCalcFields, directCostsInput);

                //all calc fields
                if (calcNotBlanks.length > 2) {
                    //if 3 or more fields are filled
                    if (attNotBlanks.length < 2) {
                        //if one of the % fields is blank

                        //add error selector highlight to field:
                        for (let value of attBlanks) {
                            //send error message to total field:
                            if (calcBlanks.indexOf(revShareWTInput) > -1) {
                                //if Wellcome rev share is blank

                                focusError(value, "WR", selectorFieldRA);
                                //send error message to total field and apply highlights

                            } else if (calcBlanks.indexOf(contributionWTInput) > -1) {
                                //if Wellcome contirbution is blank

                                focusError(value, "WC", selectorFieldRA);
                                //send error message to total field and apply highlights
                            };
                        };

                        if (calcNotBlanks.indexOf(incomeGrossInput) > -1) {
                            //when direct costs isn't blank:

                            if (calcNotBlanks.indexOf(value) > -1) {
                                //if ine of the "non-blank" fields is being selected

                                //highlihgt the others as related inputs
                                for (let val of getOthers(calcNotBlanks, value)) { relatedInput(val); };

                            } else {
                                //otherwise highlight them all
                                for (let val of calcNotBlanks) { relatedInput(val); };
                            };
                        };
                    };

                } else if (netcalcFields.indexOf(value) > -1) {
                    //if the field in focues is a net calc field

                    //highlight the other field(s):
                    for (let other of getOthers(netcalcFields, value)) { relatedInput(other); };
                    totalActive(selectorFieldRN);
                };
            };//focus

            let blurFormat = function () {
                //clean the non-numbers from field vales: remove signs
                let precleanGross = incomeGrossInput.val().replace(/£/g, "");//£
                let precleandCosts = directCostsInput.val().replace(/£/g, "");//£
                let precleanContPCT = contributionWTInput.val().replace(/%/g, "");//%
                let precleanRSPCT = revShareWTInput.val().replace(/%/g, "");//%

                //comma seperators
                let cleanincGross = precleanGross.replace(/,/g, "");
                let cleandCosts = precleandCosts.replace(/,/g, "");

                //numeric fratcion for percentages:
                let cleanContPCT = precleanContPCT.replace(/,/g, "") / 100;
                let cleanRSPCT = precleanRSPCT.replace(/,/g, "") / 100;

                //get blank and non-blank fields as arrays:
                let attBlanks = getBlank(attCalcfields);
                let attNotBlanks = getNotBlank(attCalcfields);
                //att calc fields

                let calcBlanks = getBlank(allCalcFields);
                let calcNotBlanks = getNotBlank(allCalcFields, directCostsInput);
                //all calc fields

                //map cleaned vals to inputs as arrays
                let cleanNets = [
                    { input: incomeGrossInput, clean: cleanincGross },
                    { input: directCostsInput, clean: cleandCosts }
                ];
                //net calc fields

                let cleanPCTs = [
                    { input: contributionWTInput, clean: cleanContPCT },
                    { input: revShareWTInput, clean: cleanRSPCT }
                ];
                //percentage fields

                //remove highlight from net calc fields:
                for (let value of netcalcFields) {
                    fullReset(value);
                };

                totalSelect(selectorFieldRN);
                //remove highlight from net revenue

                if (calcNotBlanks.length > 2) {
                    //if 3 or more fields are filled
                    if (attNotBlanks.length < 2) {
                        //if one of the % fields is blank

                        //add error selector highlight to field:
                        for (let value of attBlanks) {

                            //send error message to total field:
                            if (calcBlanks.indexOf(revShareWTInput) > -1) {
                                //if Wellcome rev share is blank

                                blurError(value, "WR", selectorFieldRA);
                                //send error message to total field and apply highlights

                                contributionWTInput.val(englishPerecent(cleanContPCT));
                                //percentage formate Wellcome contribution

                            } else if (calcBlanks.indexOf(contributionWTInput) > -1) {
                                //if Wellcome contirbution is blank

                                blurError(value, "WC", selectorFieldRA);
                                //send error message to total field and apply highlights

                                revShareWTInput.val(englishPerecent(cleanRSPCT));
                                //percentage formate Wellcome Revenue Share
                            };
                        };

                        //remove highlight of non-blank % field:
                        for (let value of attNotBlanks) {
                            fullReset(value);
                        };


                    } else {
                        //if all values are entered

                        //perecentage format both fields
                        for (let object of cleanPCTs) {

                            let input = object["input"];
                            let clean = object["clean"];

                            input.val(englishPerecent(clean));
                        };

                        for (let value of attCalcfields) {
                            //remove highlights from % fields
                            //or if none of the % fields are entererd

                            resetBackground(value);
                            resetBorder(value);
                        };

                        totalSelect(selectorFieldRA)
                        //reset total field
                    };

                    //remove highlight from all fields:
                    for (let value of netcalcFields) {
                        resetBackground(value);
                        resetBorder(value);
                    };
                };

                //GBP format non-blank net calc fields:
                for (let object of cleanNets) {

                    let input = object["input"];
                    let clean = object["clean"];

                    if (input.val() != "") {
                        input.val(englishPounds(clean));
                    };
                };
            };//blur

            //onload:
            focusFormat();
            blurFormat();
            value.on({
                focus: function () {
                    focusFormat();
                },
                blur: function () {
                    blurFormat();
                }
            });
        };
        //WC justification
        formatWC([contributionWTInput, contributionJustInput]);
    });
};

//4) 10 Revenue calctable calulations:
var revenueCalc = function (parentarray) {
    let getTable = jQuery(".ChoiceStructure");

    let Tablesize = getTable.find("tbody tr").length - 1;
    //number of rows (0 based)

    getTable.on({

        keyup: function () {
            let netrolling = 0;
            let grossrolling = 0;
            getTable.find('tbody tr').each(function () {
                let thisRow = jQuery(this);
                //gross income

                let trIGInput = inputSelect(thisRow.find(columnSelect('incomeGrossRef', parentarray)));
                // trIG.find('input');

                //direct costs
                let trDCInput = inputSelect(thisRow.find(columnSelect("directCostsRef", parentarray)));

                //WT contribution %
                let trWCInput = inputSelect(thisRow.find(columnSelect('contributionWTRef', parentarray)));

                //WT revenue share %
                let trRSInput = inputSelect(thisRow.find(columnSelect('revShareWTRef', parentarray)));

                //netincome - subtotal (row level)
                let trNRevInput = inputSelect(thisRow.find(columnSelect('revNetRef', parentarray)));

                //revenue attributable - subtotal (row level)
                let trARevInput = inputSelect(thisRow.find(columnSelect('revWTRef', parentarray)));

                if (thisRow.index() != Tablesize) {

                    //clean input values for calcs
                    let cleanIGI = trIGInput.val().replace(/£/g, "");
                    let cleanDCI = trDCInput.val().replace(/£/g, "");
                    //remove '£'

                    let cleanWCI = trWCInput.val().replace(/%/g, "");
                    let cleanRSI = trRSInput.val().replace(/%/g, "");
                    //remove '%'

                    let WCIpct = cleanWCI.replace(/,/g, "") / 100;
                    let RCIpct = cleanRSI.replace(/,/g, "") / 100;
                    //turn into numeric fraction

                    //Do the calcs - set values as variables
                    let rNet = cleanIGI.replace(/,/g, "") - cleanDCI.replace(/,/g, "");
                    //net revenue

                    let rAtt = rNet * WCIpct * RCIpct;
                    //revenue attributable to WT

                    //send formatted values to subtotals
                    if (trIGInput.val() != "" || trDCInput.val() != "") {
                        //if either of the net revenue calculation fields are not blank

                        trNRevInput.val(englishPounds(rNet)); //Net Revenue generated

                    } else {
                        trNRevInput.val("")
                    };

                    //revenue attributable to WT
                    if (trIGInput.val() != "" && trRSInput.val() != "" &&
                        trWCInput.val() != "" && trRSInput.val() != "") {
                        //if all revenue attributable fields have been entered

                        trARevInput.val(englishPounds(rAtt)); //revenue attributale to Wellcome
                    } else {
                        trARevInput.val("")
                    };

                    netrolling += rNet;
                    grossrolling += rAtt;

                } else if (thisRow.index() == Tablesize) {
                    //send fromatted values to sum totals

                    trNRevInput.val(englishPounds(netrolling));
                    trARevInput.val(englishPounds(grossrolling));

                    //update embedded data values for revenue retention question
                    Qualtrics.SurveyEngine.setEmbeddedData('totalRevenueAttributable', englishPounds(grossrolling));
                    Qualtrics.SurveyEngine.setEmbeddedData('tRevDisplay', grossrolling);

                    //next button switch
                    let next = sections.TwelveD
                    let details = sections.ElevenD2

                    nextbuttonDefault(next);

                    if (grossrolling > 0) {

                        nextbuttonDefault(details)

                    } else {
                        nextbuttonDefault(next);
                    }


                };
            })
        }
    });
};

//5) equity calcable calculations:
var equityCalc = function (parentarray) {
    let getETable = jQuery(".ChoiceStructure");
    //select the table

    getETable.on({
        keyup: function () {
            getETable.find("tbody tr").each(function () {
                let calcERow = jQuery(this);

                //define the fields:
                let calcTInpt = inputSelect(calcERow.find(columnSelect("totalSharesRef", parentarray)));
                //total shares

                let calcCIPT = inputSelect(calcERow.find(columnSelect("contributionWTRef", parentarray)));
                //WT contribution (%)

                let calcSIpt = inputSelect(calcERow.find(columnSelect("equityShareWTRef", parentarray)));
                //WT equity share (%)

                let totIpt = inputSelect(calcERow.find(columnSelect("equityWTRef", parentarray)))

                //clean values for calcs
                let cleanCWT = calcCIPT.val().replace(/%/g, "");
                let cleanSWT = calcSIpt.val().replace(/%/g, "");
                // remove "%"

                let cleanShares = calcTInpt.val().replace(/,/g, "");

                let ContPct = cleanCWT.replace(/,/g, "") / 100;
                let SharePCT = cleanSWT.replace(/,/g, "") / 100;
                //turn into numeric fraction and

                let sharesTotal = cleanShares * ContPct * SharePCT;
                //set calc as variable

                if (calcTInpt.val() != "" && calcCIPT.val() != ""
                    && calcSIpt.val() != "") {
                    totIpt.val(formatNumber(sharesTotal))
                }
            })
        }
    })
};

//6) Equity Calctable formatting:

var equityFormatting = function (parentarray) {

    detailsSelect("TwelveD").find(".ChoiceStructure tbody tr").each(function () {
        //select the rows
        let inputsE = jQuery(this);//current row

        //build selectors:
        let TSInpt = inputSelect(inputsE.find(columnSelect("totalSharesRef", parentarray)));
        //total shares

        let WCIPT = inputSelect(inputsE.find(columnSelect("contributionWTRef", parentarray)));
        //WT contribution (%)

        let WCJIPT = textareaselect(inputsE.find(columnSelect("contJustificationRef", parentarray)));
        //WT contribution justification

        let ESIpt = inputSelect(inputsE.find(columnSelect("equityShareWTRef", parentarray)));
        //WT equity share (%)

        let WSIpt = inputSelect(inputsE.find(columnSelect("equityWTRef", parentarray)));
        //shares due to Wellcome

        let pctFields = [WCIPT, ESIpt];//%fields

        let allFields = [TSInpt, WCIPT, ESIpt];

        for (let value of allFields) {
            let equityFocus = function () {
                for (let value of pctFields) {
                    //remove % from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/%/g, ""))
                };

                inputActive(value);

                //get blanks and non blanks as arrays:
                let Fblanks = getBlank(allFields);
                let FnotBlanks = getNotBlank(allFields);

                if (FnotBlanks.length > Fblanks.length && FnotBlanks.length != 3) {
                    //when two fields are not blank and one is

                    //display error messages as needed
                    if (Fblanks.indexOf(TSInpt) > -1) {
                        //if Total Shares is blank
                        focusError(TSInpt, "TS", WSIpt);
                        for (let value of FnotBlanks) { relatedInput(value) };

                    } else if (Fblanks.indexOf(WCIPT) > -1) {
                        //if Wellcome Contribution is blank
                        focusError(WCIPT, "WC", WSIpt);
                        for (let value of FnotBlanks) { relatedInput(value) };

                    } else if (Fblanks.indexOf(ESIpt) > -1) {
                        //if Equity share is blank
                        focusError(ESIpt, "ES", WSIpt);
                        for (let value of FnotBlanks) { relatedInput(value) };
                    };

                } else {
                    //otherwise just clear highlight from total field
                    //no error text needed
                    totalActive(WSIpt);

                    //highlights all fields:
                    for (let value of allFields) {
                        relatedInput(value)
                    };
                }

            }; //focus

            let equityBlur = function () {
                //clean values for calcs
                let cleanCWT = WCIPT.val().replace(/%/g, "");
                let cleanSWT = ESIpt.val().replace(/%/g, "");
                // remove "%"

                //clean the commas form the values
                let cleanTS = TSInpt.val().replace(/,/g, "");
                let cleanWC = cleanCWT.replace(/,/g, "") / 100;
                let cleanES = cleanSWT.replace(/,/g, "") / 100;

                //get blanks and non blanks as arrays:
                let Bblanks = getBlank(allFields);
                //blank fields

                let BnotBlanks = getNotBlank(allFields);
                //non-blank fields

                if (BnotBlanks.length > Bblanks.length && BnotBlanks.length != 3) {
                    //when two fields are not blank and one is

                    //display error messages as needed
                    if (Bblanks.indexOf(TSInpt) > -1) {
                        //if Total Shares is blank
                        blurError(TSInpt, "TS", WSIpt);
                        for (let value of BnotBlanks) { fullReset(value); };

                    } else if (Bblanks.indexOf(WCIPT) > -1) {
                        //if Wellcome Contribution is blank
                        blurError(WCIPT, "WC", WSIpt);
                        for (let value of BnotBlanks) { fullReset(value); };

                    } else if (Bblanks.indexOf(ESIpt) > -1) {
                        //if Equity share is blank
                        blurError(ESIpt, "ES", WSIpt);
                        for (let value of BnotBlanks) { fullReset(value); };
                    };
                } else {
                    //otherwise just clear highlight from total field
                    //no error text needed
                    totalSelect(WSIpt);
                    for (let value of allFields) { fullReset(value); };
                };

                //format fields which aren't blank:
                if (ESIpt.val().length > 0) {
                    ESIpt.val(englishPerecent(cleanES));
                };
                if (WCIPT.val().length > 0) {
                    WCIPT.val(englishPerecent(cleanWC));
                };
                if (TSInpt.val().length > 0) {
                    TSInpt.val(formatNumber(cleanTS));
                };
            };//blur

            //on load:
            equityFocus();
            equityBlur();

            value.on({
                focus: function () { equityFocus(); },
                blur: function () { equityBlur(); }
            });
        };

        //WC justification format:
        formatWC([WCIPT, WCJIPT]);
    })
};