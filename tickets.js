/*
    This file calculates the cost of theme park tickets when
    the user clicks the calculate button.
    Author: Gurnek Singh
    File: Theme park script file
    Date: 10/5/21
*/

let button = document.querySelector("button");
button.onclick = function (event) {
    //prevent the form from submitting
    event.preventDefault();

    //your code goes here...!!!!
    const adultCostInput = document.getElementById("adult-cost");
    const childCostInput = document.getElementById("child-cost");
    const numAdultTicketsInput = document.getElementById("num-adult-tickets");
    const numChildTicketsInput = document.getElementById("num-child-tickets");
    const adultTicketValue = parseInt(numAdultTicketsInput.value);
    const childTicketValue = parseInt(numChildTicketsInput.value);
    const adultCostValue = parseFloat(adultCostInput.value);
    const childCostValue = parseFloat(childCostInput.value);

    const totalCost = (adultCostValue * adultTicketValue) + (childCostValue * childTicketValue);
    console.log(totalCost);
    const finalMessage = document.getElementById("total-cost");
    finalMessage.innerHTML ="Total cost for tickets: $" +totalCost.toFixed(2);


    console.log("Button is working");
}