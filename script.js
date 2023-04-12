const textFormQuerySelector = document.querySelector("#converter")                      //**********
const realTime = setInterval(converstionInFrancs, 5000)                                 //*Conversion in real time so we need an interval
let auth = true                                                                         //*Weed need some kind of switch or else our output will be divided 
                                                                                        //*infinitly until it reaches 0
let moneytoConvert = textFormQuerySelector.value    
let moneyConverted
function converstionInFrancs()                                                          //********/
{
    if (auth == true)
    {
        moneytoConvert = textFormQuerySelector.value           
        if (isNaN(moneytoConvert) == true || moneytoConvert == "")                                                      //We check if user did put something
        {

        }
        else
        {

            console.log(moneytoConvert)
            moneyConverted = (moneytoConvert / 6.55957)
            console.log(moneyConverted)
            moneyConverted = roundTo(moneyConverted,2)
            textFormQuerySelector.value = moneyConverted
            console.log("work?")        
            auth = false            
        }
    }

}
function roundTo(n, place)                                                            //Function used for rounding
{    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}