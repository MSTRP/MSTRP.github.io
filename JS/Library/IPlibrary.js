//----------------------SECTION 0: GLOBAL VARIABLES
//0) Mapping
//theme colours as hex codes
var theme = {
    default: {
        text: "#000000",//black
        border: "#262626",//dark grey
        inputBackground: "rgba(0, 0, 0, 0.06)",//light grey
        helpText: "#0000FF", //blue
    },
    colours: {
        primary: "#000000",//darkest shade/colour
        secondary: "#848282", //medium shade/colour
        tertiary: "#e0e0e0", //lightest shade/colour
        error: "#ff0000", //red
    },
    highlights: {
        errorBackground: "#ee4b6b81", //light red/pink
        totalBorder: "#ac8400", //gold
        autofillBackground: "#e5e4938c",//yellow
        relatedBackground: "#97c4e45c"//light blue
    },
    /* darkMode: {
        text: "#ffffff",
        border: "#ffffff",
        primary: "#b1b1b1",
        canvas: "#313131",
    } */
};

//section headings
var sections = {
    Three: "Section 3: Invention disclosures",
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
    Eight: "Section 8: Terminated agreements",
    EightD: "Terminated agreements details",
    Nine: "Section 9: Case studies",
    NineD: "Case studies summary",
    Part2: "Part 2: Financial Reporting",
    Ten: "Section 10: Revenue",
    TenD: "Revenue generating transaction details",
    TenD2: "Revenue Retention",
    Eleven: "Section 11: Equity",
    ElevenD: "Equity obtained details",
    Twelve: "Section 12: Declaration download",
    Supporting: "Upload Supporting Documents",
    Submit: "Completion Checklist",
    Submit2: "Summary of responses",
    End: "Submit report"
};

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
    "10": {

        input: {
            "4": "Wellcome grant/award number(s) (first 6 digits)",
            "7": "Organisation Reference",
            "16": "Gross income (£)",
            "19": "Direct Costs (£)",
            "22": "Net income (£ - auto-calculation)",
            "25": "Wellcome Contribution/WC (%)",
            "31": "Wellcome Revenue Share/WR (%)",
            "34": "Revenue Attributable to Wellcome (auto-calculation)",
            "37": "Purchase order/invoice number (if applicable)"
        },
        textarea: {
            "10": "Grant/award title",
            "13": "Counterparty(s) (avoid acronyms)",
            "28": "Justification of a lower percentage (if applicable, where 3.2 of Appendix 2 applies)"
        }
    },
    "11": {

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
        }
    }
};

//2) array and object methods:
var filterBlanks = function (selector) {
    return selector.filter(function () {

        return jQuery(this).val().length == 1 && jQuery(this).val().charAt(0) == "£"
            //if the first character is "£" and the field has no other characters
            || jQuery(this).val().length == 0
        //or if the field is empty

    })
};

//functions to check the arrays:

//filter an array of inpur and return an array with the blank fields
var getBlank = function (array, exception) {
    if (exception != undefined) {
        var allBlanks = array.filter(selector => selector.val().length === 0 || selector != exception)
        return allBlanks
    } else {
        var allBlanks = array.filter(selector => selector.val().length === 0)
        return allBlanks
    }
};

//filter an array of inpur and return an array with the blank fields
var getNotBlank = function (array, exception) {
    if (exception != undefined) {
        var nonBlanks = array.filter(selector => selector.val().length > 0 || selector == exception)
        return nonBlanks
    } else {
        var nonBlanks = array.filter(selector => selector.val().length > 0)
        return nonBlanks
    }

};

//filter an array of inputs and return the fields otehr than the current field specifed
var getOthers = function (array, currentItem) {
    let Others = array.filter(selector => selector != currentItem)
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

    let thisinput = selector.find("input");
    return thisinput
};

var selectSelect = function (selector) {

    let thisinput = selector.find("select");
    return thisinput
};

var textareaselect = function (selector) {
    let thisinput = selector.find("textarea");
    return thisinput
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

//  1) turn filters questionsentry field into numeral with currency
var currencyPounds1 = function (answerFieldi) {


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

//currencyPounds1(this); //<---run the programme

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

// 4) General numberformatting :
var englishPerecent = new Intl.NumberFormat('en-GB', { style: 'percent', maximumSignificantDigits: 3, maximumFractionDigits: 0, useGrouping: false }).format;
//% format

var englishPounds = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', useGrouping: 'true' }).format;
//£0.00 format

var formatNumber = new Intl.NumberFormat('en-GB', { style: 'decimal', maximumFractionDigits: 0, useGrouping: true }).format;
//basic number formatting

//5) Hover text:

var hoverTextAdd = function (selector, text) {
    jQuery(selector.attr('title', text))
};

//5) Css formattong:


//related inputs/general
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

//5) Animations:
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
var borderFlash2 = function (hoverSelector, flashColour, flashSelector) {
    let flasher = (flashSelector != undefined) ? flashSelector : hoverSelector

    hoverSelector.mouseenter(function () {
        borderFlash(flasher, flashColour)
    })
};

//6) Question formatting:

//total row styling and display:
var totalRowFormat = function (non_blanks) {
    //Non-blanks are optional

    //selectors for last row:
    let totalRow = jQuery(".ChoiceStructure tbody tr:last-child");
    //whole row

    let inputsTotal = totalRow.find("input");
    //input fields

    let teTotal = totalRow.find("textarea");
    //text area fields

    //array of input for iteration
    let input_fields = [inputsTotal, teTotal];

    //format the last row:
    totalRow.css("background-color", getColour("tertiary"));

    for (let inputs of input_fields) {

        //format the input fields
        jQuery(inputs).css("font-weight", "bold");


        if (non_blanks != undefined) {
            //if non blanks are provided 

            //hide fields that don't need to be visible:
            jQuery(inputs).each(function () {
                let currentTotal = jQuery(this);

                //define function to compare input index vs 
                //nonBlankInputs array using array.find() method
                let checkMatch = function (ref) {
                    return ref == jQuery(inputs).index(currentTotal)
                };

                if (non_blanks.find(checkMatch) == undefined) {
                    //if input index is not in non blank inputs array

                    currentTotal.hide()
                    //hide input
                }
            });
        }
    };
};

//total column styling and display
var totalColumnFormat = function (hasTotal, columns, parentarray, ) {
    //has total = true for total row 
    //hasTotal = false for no total row
    //parent array is optional
    //colums is an array

    //selet the table rows
    let tableRow = jQuery(".ChoiceStructure tbody").find('tr');


    //set total rows to read only and formatting
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

                sumtotalSelect(thisInput)
                //apply sum total formatting

            } else {

                totalSelect(thisInput);
                //apply total formatting
            }

            thisInput.prop("readonly", true);
        }
    });
};

//clear trailing spaces for forms:
var cleanForm = function () {
    jQuery("#" + this.questionId + " input[type=text],InputText").on('blur', function (e) {
        this.value = this.value.trim();
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

//6) theme formatting and functionality:
//menubar scroll shadow
var menuScroll = function () {
    //add -- shadow when scrolling 

    jQuery(".Skin").scroll(function () {

        //selectors:
        let logo = jQuery("#LogoContainer");
        let progressBar = jQuery(".ProgressBarContainer");

        if (jQuery(".Skin").scrollTop() != 0) {
            //if the window is not at the scroll top

            //add box shadow
            progressBar.css('-webkit-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            progressBar.css('-moz-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            //progress bar

            logo.css('-webkit-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            logo.css('-moz-box-shadow', 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px');
            logo.css("box-shadow", "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px");
            //header

            //move the progress bar up
            progressBar.animate({
                top: '35px',
            }, 100);

            //make the header smaller
            jQuery(".Skin #Logo img").animate({
                maxHeight: '25px'
            }, 100)


        } else {
            //otherwise
            //remove boxshadow
            progressBar.css('-webkit-box-shadow', 'none');
            progressBar.css('-moz-box-shadow', 'none');
            //prgressbar

            logo.css("box-shadow", "none");
            logo.css("-webkit-box-shadow", "none");
            logo.css("-moz-box-shadow", "none");
            //header

            //apply default size
            progressBar.stop(true, true).css("top", "60px");
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
    jQuery("#PreviousButton").attr('title', "Ctrl + Alt + P");
    jQuery("#NextButton").attr('title', "Ctrl + Alt + N");
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
/*----------------------SECTION 2: Display logic --------------------*/
//1) hide rows 
var hideRows = function (questionNumber, filters) {

    let rows = jQuery(".ChoiceStructure tbody").find("tr");
    //select the table rows on the page with jQuery


    let filter = getFilters(questionNumber, filters);
    // get the value of the filter question response

    rows.each(function () {
        //function will loop through all rows in question
        if (jQuery(this).index() >= filter) {
            //if the row number on the page is above the filter value

            jQuery(this).hide();
            //it is hidden
        };
    })
};

//2) hide rows with total row
var hideRows2 = function (questionNumber, filters) {

    let rows = jQuery(".ChoiceStructure tbody").find("tr");
    //select the table rows on the page with jQuery

    //run the function to get filter value 
    let filter = getFilters(questionNumber, filters);


    rows.each(function () {
        //function will loop through all rows on page

        //if the row number on the page is above the filter value
        //it is hidden
        if (jQuery(this).index() >= filter) {

            if (jQuery(this).index() == 30) { return; };
            jQuery(this).hide();
        };
    })
};

//show template doc when filter is over 30
var loadtemplate = function (templatewrapper, questionNumber, filters) {
    let filter = getFilters(questionNumber, filters);

    if (filter > 30) {
        jQuery(templatewrapper).show()
    } else {
        jQuery(templatewrapper).hide
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

//next button switcher
var nextbuttonSwitch = function (detailsBtn, nextBtn) {
    //select the next button
    let nb = jQuery("#NextButton");

    if (jQuery("input").val().replace(/,/g, "") > 0) {
        //use replace() to extract commas from cleave

        // when filter is above 0 replace button text
        //with details question
        jQuery(nb).val(detailsBtn);

    }

    else {
        jQuery(nb).val(nextBtn);
    }
};

var clickSwitch = function (buttons, wrapperID, optionindex) {
    //butons is an array: [next button text, details button text]
    //option index is the option index (1 based) of the trigger question e.g.
    //yes (1)
    //maybe (2)
    //no(3)

    jQuery(wrapperID).click(function () {
        //when the question is clicked

        if (jQuery(wrapperID).find('input[value="' + optionindex + '"]:checked').length > 0) {
            //if yes is selected

            nextbuttonDefault(sections[buttons[1]])
            //update nexttoon to "details"
        } else {
            nextbuttonDefault(sections[buttons[0]])
            //otherwise set to "next"
        }
    })
};

var loadSwitch = function (direction, buttoninfo, filterArray) {
    var action = "";

    if (direction == "next") {
        action = nextbuttonDefault
    } else if (direction == "back") {
        action = prevbuttonDefault
    };
    //function to set filter logical
    let setfilter = function (index) {

        let stringfilters = ["ThreeB", "SixBD", "Supporting"];
        //references for question with string filter values

        if (stringfilters.indexOf(buttoninfo[index]) > -1 && buttoninfo[index] != "Supporting") {
            //if the current  button reference is in stringfilters

            var filter = (filterArray[buttoninfo[index]].length > 0) ? true : false
            //do logical based on string length

        } else if (stringfilters.indexOf(buttoninfo[index]) > -1 && buttoninfo[index] == "Supporting") {
            var filter = (filterArray[buttoninfo[index]].includes("Yes")) ? true : false;
            //check filter for "yes"
        } else {
            var filter = (filterArray[buttoninfo[index]] > 0) ? true : false;
            //otherwise use the size of the integer
        };

        return filter
    };

    if (buttoninfo.length == 2) {
        //if 2 button values have been provided
        if (setfilter(0)) {
            //if filter value/length is greater than 0,

            action(sections[buttoninfo[0]])
            // use the button text for the first reference
        } else {
            //otherwise

            action(sections[buttoninfo[1]])
            //use the button text for teh second reference
        };
    } else if (buttoninfo.length == 3) {
        if (setfilter(0)) {
            //if filter 1 value/length is greater than 0,

            action(sections[buttoninfo[0]])
            // use the button text for the first reference
        } else if (setfilter(1)) {
            //otherwise if filter 2 value/length is greater than 0,

            action(sections[buttoninfo[1]])
            //use the button text for the third reference
        } else {
            action(sections[buttoninfo[2]])
        }
    }
};

var keyupSwitch = function (buttons) {
    jQuery("input").keyup(function () {
        (nextbuttonSwitch(sections[buttons[0]], sections[buttons[1]]))
    })
};

//---------------copy button
var copyButton = function (buttonSelector, copySelector) {
    console.log("buttonSelector #: ", buttonSelector.lastIndexOf(""));

    jQuery(buttonSelector).click(function () {

        let copyText =
            (copySelector.lastIndexOf("#") > buttonSelector.lastIndexOf("."))
                ? document.getElementById(copySelector.replace(/#/g, "")) : document.getElementsByClassName(copySelector.replace(/./g, ""));
        copyText.select();
        //copyText.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert("our contact e-mail has been copied")

        console.log(copyText.value)
    })
};

//2) Sideways scroller for matrices (ADD ON READY):


var sideScrollButtons = function (element_being_scrolled, load_Target, hoverText) {
    //load target and hover text are optional

    var parameters = [element_being_scrolled, load_Target, hoverText];


    var hoverYN = parameters.filter(entry => typeof (entry) === Boolean);

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
            hoverTextAdd(jQuery(this), hoverText["left"]) //left 
        };


        //looping scroll function:
        function scrollTable(direction) {

            var leftPos = element_being_scrolled.scrollLeft()
            //get initial position

            var scroll_amount = (direction === "left" ? leftPos - 15 : leftPos + 15)
            //set scroll increment depending on scroll direction specified

            element_being_scrolled
                .stop(true, true) //stop other animations in queue
                .animate({
                    scrollLeft: scroll_amount
                    //move scrollar 20px in specified direction

                }, 1, function () {
                    if (scrolling) {
                        //while hovering on button scroll button
                        scrollTable(direction)
                        //keep looping function
                    }
                })
        };

        var scroll_Buttons = [
            jQuery('.Scroll--left'),
            jQuery('.Scroll--right')
        ];

        //get page and table widths
        let tablewidth = jQuery(".ChoiceStructure").width();//table in px
        let questionpagewidth = jQuery(".Skin #SkinContent").width();//page in px

        //function to display load buttons when target is in view:
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0]['isIntersecting'] == true && tablewidth > questionpagewidth) {
                //when the load target is in view on screen and the table is wider than the question page:

                jQuery('.Scroll--left')
                    .on({
                        //event handlers for the buttons:

                        mouseover: function () {
                            //run scrolling function on hover

                            scrolling = true;
                            scrollTable("left")

                        },

                        mouseout: function () {
                            //stop scrolling function on hover
                            scrolling = false
                        }

                    })
                    .stop(true, true)
                    .fadeIn('slow'); //load the button

                jQuery('.Scroll--right')
                    .on({
                        //event handlers for the buttons:

                        mouseover: function () {
                            //run scrolling function on hover

                            scrolling = true;
                            scrollTable("right")

                        },

                        mouseout: function () {
                            //stop scrolling function on hover
                            scrolling = false
                        }

                    })
                    .stop(true, true) //stop other animations in queue
                    .fadeIn('slow'); //load the button

                for (let value of scroll_Buttons) {
                    borderFlash(value, getColour("error"))
                }

            } else {
                for (let value of scroll_Buttons) {
                    value.stop(true, true).hide()
                }
            }
        }, {
            threshold: [0.1] //load when target is 10% in view
        });

        //run the function:
        observer.observe(document.querySelector(load_Target));
    }
};

//3) nav & shortcuts:
//navigation hot keys
var hotkeyNavigate = function (question) {

    //define key variales
    var pressedKeys = [];
    //array to track pressed keys (and order pressed)

    var input_fields = jQuery(".ChoiceStructure input");
    //select input fields

    const all_inputs = input_fields.length;
    //number of inputs

    jQuery(document) //applies to whole page
        .keydown(function (e) {
            pressedKeys.push(e.keyCode);
            //add the pressed key to pressedKeys array

            if (all_inputs < 5) {
                //when there are under 5 inputs on the page:

                if (all_inputs > 1) {
                    //if there is 1-4 inputs:

                    var blank_inputs = filterBlanks(input_fields).length
                    //get the number of blanks as a variable

                    if (pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 78 && blank_inputs == 0 && jQuery("#NextButton").length) {
                        //if CTRL + ALT + N are pressed in sequence and there are no blank questions & the next button is present:

                        question.clickNextButton()
                        //move to next question

                    } else if ((pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 80) && blank_inputs == 0 && jQuery("#PreviousButton").length) {
                        //if CTRL + ALT + P are pressed in sequence and there are no blank questions & the previous is present:
                        question.clickPreviousButton()
                        //move to previous question
                    }

                } else {
                    //if there is only 1 question:

                    if (pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 78 && input_fields.val() != "" && jQuery("#NextButton").length) {
                        //if CTRL + ALT + N are pressed in sequence and thequestions is not blank & the next button is present:

                        question.clickNextButton()
                        //move to next question

                    } else if ((pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 80) && input_fields.val() != "" && jQuery("#PreviousButton").length) {
                        //if CTRL + ALT + P are pressed in sequence and there are no blank questions & the previous is present:

                        question.clickPreviousButton()
                        //move to previous question
                    }

                }
            } else {
                //otherwise if there are more than 4 questions on the page:
                if (pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 78 && jQuery("#NextButton").length) {
                    //if CTRL + ALT + N are pressed in sequence & the next button is present:

                    question.clickNextButton()
                    //move to next question
                } else if ((pressedKeys[0] === 17 && pressedKeys[1] === 18 && pressedKeys[2] === 80) && jQuery("#PreviousButton").length) {
                    //if CTRL + ALT + P are pressed in sequence  & the previous is present:

                    question.clickPreviousButton()
                    //move to previous question
                }
            }

        })
        .keyup(function () {

            pressedKeys = [];
        })

    input_fields //applies to input fields
        .keyup(function (e) {

            if (all_inputs > 1 && all_inputs < 5) {
                //hwen there is more than one input on the page

                var blank_inputs = filterBlanks(input_fields).length
                //get the number of blank inouts 

                if (e.keyCode == 13 && blank_inputs == 0) {
                    //if Enter is pressed and all fields have completed

                    question.clickNextButton()
                    //got to next question
                } else if (e.keyCode == 13 && blank_inputs > 1) {
                    alert("please complete all questions on this page")
                }

            } else {
                //if just one input on the page:
                if (e.keyCode == 13 && input_fields.val() != "") {
                    //when enter is pressed and the input field is completed
                    question.clickNextButton()
                    //go to next question
                } else if (e.keyCode == 13 && input_fields.val() == "") {
                    alert("please complete this question before moving on")
                }
            }
        })
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

//---------------------SECTION: 4: WIDGETS ------------------

//1) date picker:
var loadDatePicker = function (question) {

    //build the nth-child column selector string using


    var dateRef = columnSelect(question, dateColumnsAll);

    var qRows = jQuery(".ChoiceStructure tbody").find("tr");

    qRows.each(function () {

        thisQRow = jQuery(this);

        var dpCell = thisQRow.find(dateRef);
        //select the date input cell

        var dpInput = dpCell.find('input');
        //select the input field

        var dpID = dpInput.attr('id');
        //get ID of field for FooPicker

        var foopicker = new FooPicker({ //run FooPicker
            id: dpID,
            dateFormat: 'dd/MM/yyyy'
        })
    })
};

//2) Hover text
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

    //define hover text builder function:
    function hoverTextAdd(input, helpText) {
        input.hover(function () {
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
    };

    //function to set hovertext and build selector
    function setHoverText(column_nth_index, hover_text, row) {

        //define selector
        let thisColumn = columnSelect(column_nth_index);
        let thisInput = row.find(thisColumn);
        //select current child using nth key

        //get the hover text

        hoverTextAdd(thisInput, hover_text);
        //apply the function
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

                    setHoverText(key, value, thisHrow)
                    //run for inputs
                };
            };
            //inputs
            if (allSelects !== undefined) {

                for (let [key, value] of allSelects) {

                    setHoverText(key, value, thisHrow)
                    //run for selects
                };
            }
            //selects

            if (allTextareas !== undefined) {

                for (let [key, value] of allTextareas) {

                    setHoverText(key, value, thisHrow)
                    //run for textareas
                }
            }
            //textareas
        }
    });
};

//3 menu button
var loadMenu = function (progressBartracker) {
    //progressbar tracker =  piped text code for embeded data used to track of//on status
    //accepts string values "off" and "on". default value is "on"

    var menuButton = jQuery("#Logo img");
    var menuSwitch = "off";
    var menu = jQuery("#navOuter");
    var menuList = jQuery(".navTable");
    //elements to be blurred as array:
    var blurElements = [
        jQuery("#SkinContent"),//page
        jQuery("#reportTitle"),//title
        menuButton//logo
    ];

    //functions to open and close the menu:

    let showMenu = function () {

        //blur logo, page and title:
        for (let element of blurElements) {
            element.css("filter", "blur(3px)");
        };

        //show menu animations
        menu.css("display", "inline-block").fadeIn("100");//make menu visible
        menu.animate({ height: '321px', display: 'inline-block' }, 250);//open menu container
        menuList.show(200);//show menu items


        menuSwitch = "on";//set switch status to on
    };

    let hideMenu = function () {

        //remove blur from logo, page and title:
        for (let element of blurElements) {
            element.css("filter", "none");
        };

        //close menu animations:
        menuList.hide();//hide menu items
        menu.animate({ height: '0px' }, 100);//close menu container
        menuSwitch = "off"; //set switch status to off
    };

    //button switch
    menuButton.on({
        click: function () {

            if (menuSwitch == "off" && jQuery("#EndOfSurvey").length == 0 & jQuery(".ResponseSummary").length == 0) {
                //doesn't load on response summary and end of survey pages

                showMenu();//load the menu

            } else if (menuSwitch == "on") {

                hideMenu(); //close the menu
            }
        }
    });

    //hide menu when leaving the menu with mouse
    menu.mouseleave(function () {
        hideMenu();//close menu
    });

    //hide menu when click outside of menu
    jQuery(document).mouseup(e => {
        if (!menu.is(e.target) // if the target of the click isn't the container...
            && menu.has(e.target).length === 0 // ... nor a descendant of the container
            && !menuButton.is(e.target)) //nor the menu button
        {
            hideMenu(); //close menu
        }
    });


    //Progressbar show-hide
    var pbIO = progressBartracker;
    //get progress bar setting on load (default is on)

    //selectors
    var ptoggle = jQuery("#pdButton");//wrapper
    var toggleSwitch = jQuery("#toggle-switcher"); //toggle
    var toggleArea = jQuery(".toggle-button");//toggle track
    var progressBar = jQuery(".ProgressBarContainer");//progress bar

    //toggle actions
    let offPosition = function () {
        //make toggle track white
        toggleArea.css("background-color", "white");

        //move toggle switcher to right
        toggleSwitch.css("background-color", "#f1f1f1");
        toggleSwitch.css("left", "0");
    };

    let onPosition = function () {
        //make toggle track dark green
        toggleArea.css("background-color", getColour("secondary"))

        //move toggle switcher to left
        toggleSwitch.css("background-color", getColour("secondary"));
        toggleSwitch.css("left", "16px")
    };


    //on load
    if (pbIO == "on") {
        //if progress bar was last set to visible

        progressBar.show()//show the progressbar
        onPosition(); //set toggle to "on" position

    } else if (pbIO == "off") {
        //otherwise if it was last set to off

        progressBar.hide(); //hide the progress bar
        offPosition(); //set toggle to "off" position
    };

    //on click
    ptoggle.on({

        click: function () {

            if (pbIO == "on") {

                progressBar.hide(100);
                //hide the progress bar

                offPosition();//set toggle to "off" position

                pbIO = "off";
                Qualtrics.SurveyEngine.setEmbeddedData('progressBar', pbIO);
                //send value to embedded data 

            } else if (pbIO == "off") {

                progressBar.show(200);
                //show the progress bar

                onPosition(); //set toggle to "on" position

                pbIO = "on";
                Qualtrics.SurveyEngine.setEmbeddedData('progressBar', pbIO);
                //send value to embedded data 
            }
        }
    });

};

//--------------------Section X: Question specific
//1) 3A buttons on click
var buttons3a = function (NPF_cloumn, detailsRef, nextRef) {

    let table = jQuery(".QuestionBody");

    table.on("click keyup", function () {
        var fRolling = 0;
        var fCount = 0;

        table.find("tbody tr").each(function () {

            var npfSelect = selectSelect(jQuery(this).find(columnSelect(NPF_cloumn)));
            //select the dropdown 

            if (npfSelect.val() == 2) {
                //if F is selected add 1 to thr olling tally

                var fTally = 1
            } else {
                //otherwise add nothing

                var fTally = 0
            };
            //rolling calcs:
            fCount += fTally,
                fRolling += fCount;

            if (fRolling > 0) {
                //if 1 or more Fs are selected

                nextbuttonDefault(sections[detailsRef])
                //set button text to "details"
            } else {
                //otherwise keep as "next"
                nextbuttonDefault(sections[nextRef])
            }
        })
    });
}
// 2) 3B Filed patents carry forward :
var carry3b = function (answerlist) {
    //select the array for each answer field
    var awardNo = answerlist["awardNo"];
    var NPF = answerlist["NPF"];
    var uniqueID = answerlist["uniqueID"];
    var inventors = answerlist["inventors"];

    var allRows = jQuery(".QuestionBody tbody tr");

    allRows.each(function () {

        thisRow = jQuery(this);
        rowindex = jQuery(this).index();

        //define values for row
        var aNo = awardNo[rowindex];
        //award No.

        var uID = uniqueID[rowindex];
        //org ref

        var nIn = inventors[rowindex];
        //inventors

        var nPF = NPF[rowindex];
        //Patent app status

        if (nPF !== "F") {
            //if F was not selected

            jQuery(this).hide();
            //hide this row

        } else {

            //define the fields + input selector
            var awardN = thisRow.find("td:nth-child(4)");
            var awardNoIpt = awardN.find("textarea")

            var uniqueI = thisRow.find("td:nth-child(7)");
            var uniqueIDIpt = uniqueI.find("input");

            var invs = thisRow.find("td:nth-child(10)");
            var inventorsIpt = invs.find("textarea");

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
        }
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
        var more_detail = inputs6.find(columnSelect("moreInfo", formatting_columnRefs))
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

                    highLight(chL, mdTE)
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

                    highLight(hasAgreement, noInfobox)
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
                removehighLight2(hasAgreement, noInfobox)
            }
        };

        //formatting on load:
        formathasAgreement()//helpers
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

                var yTally = 1
                //add 1 to the rollling count
            } else {
                //otherwise

                var yTally = 0
                //add nothing
            };

            yesCount += yTally;

            yesRolling += yesCount;

            if (yesRolling > 0) {
                //if yes is selected 1 or more times

                nextbuttonDefault(sections[details])
                //next button changes to "upload supporting documents"
            } else {
                //otherwise

                nextbuttonDefault(sections[next]);
                ////next button changes to "Section 7: Other live agreements"
            }
        })
    });
};
//4) 6 new transactions upload carry forward
var carry6 = function (answerlist) {
    //define array within object as a variable for each answer field
    var uniqueID = answerlist["uniqueID"];
    var counterParty = answerlist["counterParty"];
    var effectiveDate = answerlist["effectiveDate"];

    //define the Question IDs as an array - to be used with string.find() 
    var questionIDs = answerlist["questionIDs"];

    jQuery(".QuestionOuter").each(function () {
        var thisQContainer = jQuery(this);
        var thisID = thisQContainer.attr("id");
        //get class and  id as a string e.g. "QuestionOuter BorderColor FileUpload  QID174"

        for (let ID in questionIDs) {
            // loop through question Ids

            if (thisID == questionIDs[ID]) {
                //if the key value is present in the class:

                //define the target <span> elements as variable
                //selecting them by id
                var thisRef = thisQContainer.find(".orgRef");//Organsation reference
                var thisParty = thisQContainer.find(".counterParty"); //Counterparty
                var thisDate = thisQContainer.find(".effectiveDate"); //effective date

                //append the piped text value from the map to target <span>:
                thisRef.append(uniqueID[ID] + "'"); //Organsation reference
                thisParty.append(counterParty[ID] + "'"); //Counterparty
                thisDate.append(effectiveDate[ID] + ")"); //effective date
            }
        }
    })
}

//3) 10 Revenue calctable formatting:
var revenueFormatting = function (parentarray) {

    jQuery(".ChoiceStructure tbody tr").each(function () {
        //for each table row:
        let inputs = jQuery(this);
        //selector for current row

        //define and map inputs:
        var incomeGrossInput = inputSelect(inputs.find(columnSelect("incomeGrossRef", parentarray))); //gross income
        var directCostsInput = inputSelect(inputs.find(columnSelect("directCostsRef", parentarray))); //direct costs
        var contributionWTInput = inputSelect(inputs.find(columnSelect("contributionWTRef", parentarray))); //WT contribution %
        var contributionJustInput = textareaselect(inputs.find(columnSelect("contributionJust", parentarray))); //WT contribution Justification
        
        var revShareWTInput = inputSelect(inputs.find(columnSelect("revShareWTRef", parentarray))); //WT revenue share %
        var selectorFieldRN = inputSelect(inputs.find(columnSelect("revNetRef", parentarray))); //net revenue
        var selectorFieldRA = inputSelect(inputs.find(columnSelect("revWTRef", parentarray))); //revenue attributable to WT

        //create arrays for looping:
        var netcalcFields = [incomeGrossInput, directCostsInput];//net revenue
        var attCalcfields = [revShareWTInput, contributionWTInput];//% for revenue attributable
        var allCalcFields = netcalcFields.concat(attCalcfields);
        //calculation input fields

        //calc formatting
        for (let value of allCalcFields) {

            //formatting functions
            let focusFormat = function () {
                for (let value of netcalcFields) {
                    //remove '£' from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/£/g, ""))
                };

                for (let value of attCalcfields) {
                    //remove % from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/%/g, ""))
                };
                inputActive(value);
                //highlight border of active current input

                //get blank and non-blank fields as arrays:
                var attBlanks = getBlank(attCalcfields);
                var attNotBlanks = getNotBlank(attCalcfields);
                //att calc fields

                var calcBlanks = getBlank(allCalcFields);
                var calcNotBlanks = getNotBlank(allCalcFields, directCostsInput);

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

                                focusError(value, "WR", selectorFieldRA)
                                //send error message to total field and apply highlights

                            } else if (calcBlanks.indexOf(contributionWTInput) > -1) {
                                //if Wellcome contirbution is blank

                                focusError(value, "WC", selectorFieldRA)
                                //send error message to total field and apply highlights
                            }
                        };

                        if (calcNotBlanks.indexOf(incomeGrossInput) > -1) {
                            //when direct costs isn't blank:

                            if (calcNotBlanks.indexOf(value) > -1) {
                                //if ine of the "non-blank" fields is being selected

                                //highlihgt the others as related inputs
                                for (let val of getOthers(calcNotBlanks, value)) {
                                    relatedInput(val)
                                }

                            } else {
                                //otherwise highlight them all

                                for (let val of calcNotBlanks) {
                                    relatedInput(val)
                                }
                            }
                        };
                    }

                } else if (netcalcFields.indexOf(value) > -1) {
                    //if the field in focues is a net calc field

                    //highlight the other field(s):
                    for (let other of getOthers(netcalcFields, value)) {
                        relatedInput(other)
                    };

                    totalActive(selectorFieldRN) //highlight net total   
                }
            };//focus

            let blurFormat = function () {
                //clean the non-numbers from field vales: remove signs
                let precleanGross = incomeGrossInput.val().replace(/£/g, "");//£
                let precleandCosts = directCostsInput.val().replace(/£/g, "");//£
                let precleanContPCT = contributionWTInput.val().replace(/%/g, "");//%
                let precleanRSPCT = revShareWTInput.val().replace(/%/g, "");//%

                //comma seperators
                var cleanincGross = precleanGross.replace(/,/g, "");
                var cleandCosts = precleandCosts.replace(/,/g, "");

                //numeric fratcion for percentages:
                var cleanContPCT = precleanContPCT.replace(/,/g, "") / 100;
                var cleanRSPCT = precleanRSPCT.replace(/,/g, "") / 100;

                //get blank and non-blank fields as arrays:
                var attBlanks = getBlank(attCalcfields);
                var attNotBlanks = getNotBlank(attCalcfields);
                //att calc fields

                var calcBlanks = getBlank(allCalcFields);
                var calcNotBlanks = getNotBlank(allCalcFields, directCostsInput);
                //all calc fields

                //map cleaned vals to inputs as arrays
                var cleanNets = [
                    { input: incomeGrossInput, clean: cleanincGross },
                    { input: directCostsInput, clean: cleandCosts }
                ];
                //net calc fields

                var cleanPCTs = [
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

                                blurError(value, "WR", selectorFieldRA)
                                //send error message to total field and apply highlights

                                contributionWTInput.val(englishPerecent(cleanContPCT));
                                //percentage formate Wellcome contribution

                            } else if (calcBlanks.indexOf(contributionWTInput) > -1) {
                                //if Wellcome contirbution is blank

                                blurError(value, "WC", selectorFieldRA)
                                //send error message to total field and apply highlights

                                revShareWTInput.val(englishPerecent(cleanRSPCT));
                                //percentage formate Wellcome Revenue Share
                            }
                        };

                        //remove highlight of non-blank % field:
                        for (let value of attNotBlanks) {
                            fullReset(value)
                        };


                    } else {
                        //if all values are entered

                        //perecentage format both fields
                        for (let object of cleanPCTs) {

                            let input = object["input"];
                            let clean = object["clean"];

                            input.val(englishPerecent(clean))
                        };

                        for (let value of attCalcfields) {
                            //remove highlights from % fields
                            //or if none of the % fields are entererd

                            resetBackground(value);
                            resetBorder(value)
                        };

                        totalSelect(selectorFieldRA)
                        //reset total field
                    };

                    //remove highlight from all fields:
                    for (let value of netcalcFields) {
                        resetBackground(value);
                        resetBorder(value)
                    };
                };

                //GBP format non-blank net calc fields:
                for (let object of cleanNets) {

                    let input = object["input"];
                    let clean = object["clean"];

                    if (input.val() != "") {
                        input.val(englishPounds(clean))
                    }
                }
            };//blur

            //onload:
            focusFormat();
            blurFormat();
            value.on({
                //logial formatting in click and blur

                focus: function () {
                    focusFormat();
                },
                blur: function () {
                    blurFormat();
                }
            })
        };

        //WC justification
        formatWC([contributionWTInput, contributionJustInput])
    })


};

//4) 10 Revenue calctable calulations:
var revenueCalc = function (parentarray) {
    let getTable = jQuery(".ChoiceStructure");

    let Tablesize = getTable.find("tbody tr").length - 1;
    //number of rows (0 based)

    getTable.on({

        keyup: function () {
            var netrolling = 0;
            var grossrolling = 0;
            getTable.find('tbody tr').each(function () {
                var thisRow = jQuery(this);
                //gross income

                var trIGInput = inputSelect(thisRow.find(columnSelect('incomeGrossRef', parentarray)));
                // trIG.find('input');

                //direct costs
                var trDCInput = inputSelect(thisRow.find(columnSelect("directCostsRef", parentarray)));

                //WT contribution %
                var trWCInput = inputSelect(thisRow.find(columnSelect('contributionWTRef', parentarray)));

                //WT revenue share %
                var trRSInput = inputSelect(thisRow.find(columnSelect('revShareWTRef', parentarray)));

                //netincome - subtotal (row level)
                var trNRevInput = inputSelect(thisRow.find(columnSelect('revNetRef', parentarray)));

                //revenue attributable - subtotal (row level)
                var trARevInput = inputSelect(thisRow.find(columnSelect('revWTRef', parentarray)));

                if (thisRow.index() != Tablesize) {

                    //clean input values for calcs
                    var cleanIGI = trIGInput.val().replace(/£/g, "");
                    var cleanDCI = trDCInput.val().replace(/£/g, "");
                    //remove '£'

                    var cleanWCI = trWCInput.val().replace(/%/g, "");
                    var cleanRSI = trRSInput.val().replace(/%/g, "");
                    //remove '%'

                    var WCIpct = cleanWCI.replace(/,/g, "") / 100;
                    var RCIpct = cleanRSI.replace(/,/g, "") / 100;
                    //turn into numeric fraction

                    //Do the calcs - set values as variables
                    var rNet = cleanIGI.replace(/,/g, "") - cleanDCI.replace(/,/g, "");
                    //net revenue

                    var rAtt = rNet * WCIpct * RCIpct;
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
                    let next = "11. Equity"
                    let details = "Revenue Retention"


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
    var getETable = jQuery(".ChoiceStructure");
    //select the table

    getETable.on({
        keyup: function () {
            getETable.find("tbody tr").each(function () {
                var calcERow = jQuery(this);

                //define the fields:
                var calcTInpt = inputSelect(calcERow.find(columnSelect("totalSharesRef", parentarray)));
                //total shares

                var calcCIPT = inputSelect(calcERow.find(columnSelect("contributionWTRef", parentarray)));
                //WT contribution (%)

                var calcSIpt = inputSelect(calcERow.find(columnSelect("equityShareWTRef", parentarray)));
                //WT equity share (%)

                var totIpt = inputSelect(calcERow.find(columnSelect("equityWTRef", parentarray)))

                //clean values for calcs
                var cleanCWT = calcCIPT.val().replace(/%/g, "");
                var cleanSWT = calcSIpt.val().replace(/%/g, "");
                // remove "%"

                var cleanShares = calcTInpt.val().replace(/,/g, "");

                var ContPct = cleanCWT.replace(/,/g, "") / 100;
                var SharePCT = cleanSWT.replace(/,/g, "") / 100;
                //turn into numeric fraction and

                var sharesTotal = cleanShares * ContPct * SharePCT;
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

    jQuery(".ChoiceStructure tbody").find("tr").each(function () {
        //select the rows
        var inputsE = jQuery(this);//current row

        //build selectors:
        var TSInpt = inputSelect(inputsE.find(columnSelect("totalSharesRef", parentarray)));
        //total shares

        var WCIPT = inputSelect(inputsE.find(columnSelect("contributionWTRef", parentarray)));
        //WT contribution (%)

        var WCJIPT = textareaselect(inputsE.find(columnSelect("contJustificationRef", parentarray)));
        //WT contribution justification

        var ESIpt = inputSelect(inputsE.find(columnSelect("equityShareWTRef", parentarray)));
        //WT equity share (%)

        var WSIpt = inputSelect(inputsE.find(columnSelect("equityWTRef", parentarray)));
        //shares due to Wellcome



        //create arrays for looping:
        var pctFields = [WCIPT, ESIpt];
        //%fields

        var allFields = [TSInpt, WCIPT, ESIpt];


        //calc formatting
        for (value of allFields) {

            //formatting functions:
            let equityFocus = function () {
                for (let value of pctFields) {
                    //remove % from value to ensure net revenue 
                    //displays as a number and avoid NaN error
                    value.val(value.val().replace(/%/g, ""))
                };

                inputActive(value);
                //show current input as active

                //get blanks and non blanks as arrays:
                var Fblanks = getBlank(allFields);
                var FnotBlanks = getNotBlank(allFields);

                if (FnotBlanks.length > Fblanks.length && FnotBlanks.length != 3) {
                    //when two fields are not blank and one is

                    //display error messages as needed
                    if (Fblanks.indexOf(TSInpt) > -1) {
                        //if Total Shares is blank

                        focusError(TSInpt, "TS", WSIpt);

                        for (let value of FnotBlanks) {
                            relatedInput(value)
                        }
                    } else if (Fblanks.indexOf(WCIPT) > -1) {
                        //if Wellcome Contribution is blank

                        focusError(WCIPT, "WC", WSIpt);

                        for (let value of FnotBlanks) {
                            relatedInput(value)
                        }
                    } else if (Fblanks.indexOf(ESIpt) > -1) {
                        //if Equity share is blank

                        focusError(ESIpt, "ES", WSIpt);

                        for (let value of FnotBlanks) {
                            relatedInput(value)
                        }
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
                var cleanTS = TSInpt.val().replace(/,/g, "");
                var cleanWC = cleanCWT.replace(/,/g, "") / 100;
                var cleanES = cleanSWT.replace(/,/g, "") / 100;

                //get blanks and non blanks as arrays:
                var Bblanks = getBlank(allFields);
                //blank fields

                var BnotBlanks = getNotBlank(allFields);
                //non-blank fields


                if (BnotBlanks.length > Bblanks.length && BnotBlanks.length != 3) {
                    //when two fields are not blank and one is

                    //display error messages as needed
                    if (Bblanks.indexOf(TSInpt) > -1) {
                        //if Total Shares is blank

                        blurError(TSInpt, "TS", WSIpt);
                        for (let value of BnotBlanks) {
                            fullReset(value)
                        }


                    } else if (Bblanks.indexOf(WCIPT) > -1) {
                        //if Wellcome Contribution is blank

                        blurError(WCIPT, "WC", WSIpt);
                        for (let value of BnotBlanks) {
                            fullReset(value)
                        }

                    } else if (Bblanks.indexOf(ESIpt) > -1) {
                        //if Equity share is blank

                        blurError(ESIpt, "ES", WSIpt);
                        for (let value of BnotBlanks) {
                            fullReset(value)
                        }
                    }

                } else {
                    //otherwise just clear highlight from total field
                    //no error text needed
                    totalSelect(WSIpt);

                    //remove highlights from all fields
                    for (let value of allFields) {
                        fullReset(value);
                    };
                };

                //format fields which aren't blank:
                if (ESIpt.val().length > 0) {
                    //%format Equity Wellcome contribution if not blank
                    ESIpt.val(englishPerecent(cleanES))
                };

                if (WCIPT.val().length > 0) {
                    //%format Equity Share if not blank
                    WCIPT.val(englishPerecent(cleanWC))
                };

                if (TSInpt.val().length > 0) {
                    //apply number frmatting to this field
                    TSInpt.val(formatNumber(cleanTS));
                }
            };//blur

            //on load:
            equityFocus();
            equityBlur();


            //on focus/blur:
            value.on({

                focus: function () {
                    equityFocus();

                },

                blur: function () {
                    equityBlur();
                }
            })
        };

        //WC justification format:
        formatWC([WCIPT, WCJIPT]);
    })
};