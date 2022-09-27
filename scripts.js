const buttons = document.querySelectorAll(".button-tip");
buttons.forEach((btn) => {
    btn.addEventListener("click", function handleClick() {
        removeSelected();
        setTip(this.value);
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
        } else {
            btn.classList.add("selected");
        }
    });
});

function removeSelected() {
    const selected = document.querySelectorAll(".selected");
    selected.forEach((sel) => {
        sel.classList.remove("selected");
    });
}

let billAmount = 0.0;
let resetButton = document.getElementById("reset");

function setBillAmount() {
    billAmount = document.getElementById("bill-amount").value;
    resetButton.disabled = false;
}

function customTip() {
    removeSelected();
    customTipAmount = document.getElementById("custom-tip").value;
    customTipAmount /= 100;
    setTip(customTipAmount);
}

let tipAmount = 0;
function setTip(tip) {
    tipAmount = tip;
    console.log(tip);
    resetButton.disabled = false;
}

let numOfPeople = 1;
function updateNumOfPeople() {
    numOfPeople = document.getElementById("people").value;
    resetButton.disabled = false;
    tipResult();
    billResult();
}

let tipAmountPp = document.getElementById("tip-pp");

function tipResult() {
    let result = (billAmount * tipAmount) / numOfPeople;
    result = result.toFixed(2);
    tipAmountPp.textContent = `$${result}`;
}

let billAmountPp = document.getElementById("bill-pp");

function billResult() {
    let totalTip = billAmount * tipAmount;
    let billCost = Number(billAmount) + Number(totalTip);
    let billCostPp = billCost / numOfPeople;
    billCostPp = billCostPp.toFixed(2);
    billAmountPp.textContent = `$${billCostPp}`;
}
