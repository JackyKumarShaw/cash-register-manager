const billAmount = document.getElementById("billAmt");
let givenAmount;
const submit = document.querySelector("#btn");
const result = document.querySelector("#result");
const insert = document.getElementById("toBe");

function calculate(bal){
    const denominations = [2000, 500, 100, 20, 10, 5, 1];
    var minNotes = new Map();
    var contains = 0;
    for(var i = 0; i<denominations.length; i++){
        if(bal > 0) {
            contains = Math.floor(bal/denominations[i])
            minNotes.set(denominations[i], contains); // myMap.set(key, value) is the syntax
            bal = bal - (denominations[i]*contains);
        }
    }
    var resultString = "";
    minNotes.forEach((noteFreq, noteType)=> {
        resultString += `${noteFreq} number of ${noteType} rupee notes are required.\n`;
    })
    console.log(resultString);
    result.innerText = resultString;
}

function doThis() {
    if(billAmount.value == "" || givenAmount.value == "")
        alert("Hey! You forgot to enter some values!");
    else {
        var balance = givenAmount.value - billAmount.value;
        if(balance < 0) {
            alert("Ask your customer to pay full bill amount!");
        }
        calculate(balance);
    }
}


submit.addEventListener("click", doThis);
billAmount.addEventListener("change", doThat => {
    
    insert.innerHTML = "<span>Enter the Amount given by the customer :</span>" + "<input type='number' id='givenAmt'></input>";
    givenAmount = document.getElementById("givenAmt");
})

