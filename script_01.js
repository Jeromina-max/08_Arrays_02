
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "S"
// "Q" (question) --> "Q"
// "E" (exclamation) --> "E"


/*** Funktion mit Array als Parameter */
// Tests:
/* ausgabe(satzbauArr(["Ich","bin","Imran","Malik"],"S"));
ausgabe(satzbauArr(["Bist","du","Malte"],"Q"));
ausgabe(satzbauArr(["Ich","bin"],"E"));
ausgabe(satzbauArr(["Ich","bin"],"Ekhkjhjk"));
 */

function satzbauArr(arr) {
    
    let gap     = " ";
    let punct   = ".";
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