const textFormQuerySelector = document.querySelector("#converter")                      //**********
const realTime = setInterval(converstionInFrancsPrep, 1000)                             //*Quick interval to scan the page to see if used started to put a number or not
const errorMsgIdQuerySelector = document.querySelector("#error")
let auth = true                                                                         //*Weed need some kind of switch or else our output will be divided 
                                                                                        //*infinitly until it reaches 0
let moneytoConvert = textFormQuerySelector.value    
let moneyConverted
function converstionInFrancsPrep()                                                          //********/
{
    if (auth == true)
    {
        moneytoConvert = textFormQuerySelector.value                                        
        if (isNaN(moneytoConvert) == true || moneytoConvert == "")                     //We check if user did put something or if it is a number
        {
            errorMsgIdQuerySelector.innerHTML = "Feed me a number!"
        }
        else
        {
            setInterval(conversionInFrancs,5000)                                        //We user start putting the first number start a long interval to let him time a big number
        }
    }
}
function conversionInFrancs()
{
    if (auth == true)
    {
        clearInterval(converstionInFrancsPrep)    
        moneytoConvert = textFormQuerySelector.value  
        console.log(moneytoConvert)
        moneyConverted = (moneytoConvert / 6.55957)
        console.log(moneyConverted)
        moneyConverted = roundTo(moneyConverted,2)
        textFormQuerySelector.value = moneyConverted
        console.log("work?")        
        auth = false          
    }
}
function roundTo(n, place)                                                            //Function used for rounding
{    
    return +(Math.round(n + "e+" + place) + "e-" + place)
    //This means : return me the nb*100// This places the decimal
}