let sum = "";
let sum2 = "";
let num = 0;
let num2 = 0;
let total = 0;
let count = true;

const displaySum = document.getElementById('display');


function one () {
    if (count === true) {
        displaySum.innerHTML = sum + "1";
        sum = sum + "1";
        num += "1";
    } else {
        displaySum.innerHTML = sum2 + "1";
        sum2 = sum2 + "1";
        num2 += "1";
    }
}

function two () {
    if (count === true) {
        displaySum.innerHTML = sum + "2";
        sum = sum + "2";
        num += "2";
    } else {
        displaySum.innerHTML = sum2 + "2";
        sum2 = sum2 + "2";
        num2 += "2";
    }
}

function three () {
    if (count === true) {
        displaySum.innerHTML = sum + "3";
        sum = sum + "3";
        num += "3";
    } else {
        displaySum.innerHTML = sum2 + "3";
        sum2 = sum2 + "3";
        num2 += "3";
    }
}

function four () {
    if (count === true) {
        displaySum.innerHTML = sum + "4";
        sum = sum + "4";
        num += "4";
    } else {
        displaySum.innerHTML = sum2 + "4";
        sum2 = sum2 + "4";
        num2 += "4";
    }
}

function five () {
    if (count === true) {
        displaySum.innerHTML = sum + "5";
        sum = sum + "5";
        num += "5";
    } else {
        displaySum.innerHTML = sum2 + "5";
        sum2 = sum2 + "5";
        num2 += "5";
    }
}

function six () {
    if (count === true) {
        displaySum.innerHTML = sum + "6";
        sum = sum + "6";
        num += "6";
    } else {
        displaySum.innerHTML = sum2 + "6";
        sum2 = sum2 + "6";
        num2 += "6";
    }
}

function seven () {
    if (count === true) {
        displaySum.innerHTML = sum + "7";
        sum = sum + "7";
        num += "7";
    } else {
        displaySum.innerHTML = sum2 + "7";
        sum2 = sum2 + "7";
        num2 += "7";
    }
}

function eight () {
    if (count === true) {
        displaySum.innerHTML = sum + "8";
        sum = sum + "8";
        num += "8";
    } else {
        displaySum.innerHTML = sum2 + "8";
        sum2 = sum2 + "8";
        num2 += "8";
    }
}

function nine () {
    if (count === true) {
        displaySum.innerHTML = sum + "9";
        sum = sum + "9";
        num += "9";
    } else {
        displaySum.innerHTML = sum2 + "9";
        sum2 = sum2 + "9";
        num2 += "9";
    }
}

function zero () {
    if (count === true) {
        displaySum.innerHTML = sum + "0";
        sum = sum + "0";
        num += "0";
    } else {
        displaySum.innerHTML = sum2 + "0";
        sum2 = sum2 + "0";
        num2 += "0";
    }
}

function plus () {
    num = Number(num);
    num2 = Number(num2);
    if (count === true) {
        count = false;
        total =+ total + num;
        displaySum.innerHTML = total;
        sum = "";
    } else {
        count = true;
        total = total + num2;
        displaySum.innerHTML = total;
        sum2 = "";
        num = 0;
        num2 = 0;
    }
}