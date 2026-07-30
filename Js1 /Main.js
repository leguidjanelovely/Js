const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");

const sumTxt = document.getElementById("sum");
const minusTxt = document.getElementById("minus");
const timesTxt = document.getElementById("times");
const divideTxt = document.getElementById("divide");

function calculate() {
    if (num1Txt.value === "" || num2Txt.value === "") {
        return;
    }

    const num1 = parseFloat(num1Txt.value);
    const num2 = parseFloat(num2Txt.value);

    sumTxt.textContent = num1 + num2;
    minusTxt.textContent = num1 - num2;
    timesTxt.textContent = num1 * num2;
    divideTxt.textContent = (num1 / num2);
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
}

    sumTxt.textContent = "";
    minusTxt.textContent = "";
    timesTxt.textContent = "";
    divideTxt.textContent = "";
