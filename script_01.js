
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "S"
// "Q" (question) --> "Q"
// "E" (exclamation) --> "E"


/*** Funktion mit Array als Parameter */
// Tests:

ausgabe(satzbauArr(["Ich","bin","Imran","Malik"],"S"));
ausgabe(satzbauArr(["Bist","du","Imran"],"Q"));
ausgabe(satzbauArr(["Ich","bin"],"E"));
ausgabe(satzbauArr(["Ich","bin"],"Ekhkjhjk"));

function satzbauArr(arr,flag) {
    
    let gap     = " ";
    let punct   = getPunct(flag);
    let str     = "";

    for (let i = 0; i < arr.length; i++) 
    {
        if (i != (arr.length - 1)) { 
            str +=  arr[i] + gap;
        } else {
            str +=  arr[i] + punct;
        }
    }                

    return str ; 

}

/* ausgabe(getPunct("S"));
ausgabe(getPunct("Q"));
ausgabe(getPunct("E"));
ausgabe(getPunct("jldhgoidfusgzpso")); */
function getPunct(checkStr) {
    switch (checkStr) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
            default:
            return "#";
    }
}

function ausgabe(outputStr) {
    console.log(outputStr);
}