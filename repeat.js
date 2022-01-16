function getHistory() {
    return document.getElementById("history-value").innerHTML;
}

function printHistory(num) {
    return (document.getElementById("history-value").innerHTML = num);
}

function getOutput() {
    return document.getElementById("output-value").innerHTML;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerHTML = num;
    } else {
        document.getElementById("output-value").innerHTML = formattedNumber(num);
    }
}

function formattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en"); //takes number and convert to formatted text
    return value;
}

function reverseformattedNumber(num) {
    return Number(num.replace(/,/g, ""));
}

const operator = document.getElementsByClassName("operator");
const number = document.getElementsByClassName("number");

for (click of operator) {
    click.addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            let output = reverseformattedNumber(getOutput()).toString();
            output = output.substring(0, output.length - 1);
            printOutput(output);
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history == "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substring(0, length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseformattedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    let result = eval(history);
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
}

for (click of number) {
    click.addEventListener("click", function() {
        let output = reverseformattedNumber(getOutput().toString());
        if (!isNaN(output)) {
            //is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}