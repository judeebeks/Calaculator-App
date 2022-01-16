function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return (document.getElementById("history-value").innerText = num);
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = formattedNumber(num);
    }
}

function formattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseformattedNumber(num) {
    return Number(num.replace(/,/g, ""));
}

let operator = document.getElementsByClassName("operator");
let number = document.getElementsByClassName("number");

// for(let i = 0; i < operator.length; i++){
// 	console.log(i)
// 	operator[i].addEventListener("click", function(){
// 		alert("The operator clicked is:" + this.id)
// 		console.log(this)
// 	})
// }

for (let n = 0; n < operator.length; n++) {
    operator[n].addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            let output = reverseformattedNumber(getOutput()).toString();
            if (output) {
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history == "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substring(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseformattedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
} //this is a simpler iteration than the one above.

for (n of number) {
    n.addEventListener("click", function() {
        let output = reverseformattedNumber(getOutput().toString());
        if (!isNaN(output)) {
            //is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

let pink = eval("2*2");
let numba = "59043";
let str = numba.substring(0, numba.length - 1);

console.log(numba[numba.length - 1]);