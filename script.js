const textFormQuerySelector = document.querySelector("#converter")
const realTime = setInterval(converstionInFrancs, 5000)
let auth = true

function converstionInFrancs()
{
    if (auth == true)
    {
        let moneytoConvert = textFormQuerySelector.value
        console.log(moneytoConvert)
        let moneyConverted = (moneytoConvert / 6.55957)
        console.log(moneyConverted)
        moneyConverted = roundTo(moneyConverted,2)
        textFormQuerySelector.value = moneyConverted
        console.log("work?")        
        auth = false
    }

}
function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}