import React from "react";
import NumberPad from "./numbers";

const operators = {
    '+': function(a, b) { return parseInt(a) + parseInt(b); },
    '-': function(a, b) { return a - b; },
    '*': function(a, b) { return a * b; },
    '/': function(a, b) { return a / b; }
  };
  

export function KeyPad () {
    const numberPadArray = [];

    for (let i = 9; i >= 0; i--) {
        numberPadArray.push(<NumberPad key={'key-'+i} data={i} func={click} />);
    }
    numberPadArray.push(<NumberPad key={'key-11'} data='+' func={click} />);
    numberPadArray.push(<NumberPad key={'key-12'} data='-' func={click} />);
    numberPadArray.push(<NumberPad key={'key-13'} data='*' func={click} />);
    numberPadArray.push(<NumberPad key={'key-14'} data='/' func={click} />);
    numberPadArray.push(<NumberPad key={'key-15'} data='C' func={click} />);
    numberPadArray.push(<NumberPad key={'key-16'} data='=' func={click} />);

    return (
        <div className="keypad"> {numberPadArray} </div>
    );
}

const click = function clickEvent(data) {
    const input = data.target.innerText;
    const output = document.getElementById('output');

    if (input === 'C') {
        output.textContent = '0';
    } else if (input === '=') {
        output.textContent = processMath(output.textContent);
    } else if (output.textContent.length === 1 && output.textContent === '0') {
        output.textContent = input;
    } else {
        output.textContent += input;
    }
}

function orderOfOperations(input) {
    let splitArray = [];
    for (let i = 0; i < input.length; i++) {
        if (!isNumber(parseInt(input.charAt(i)))) {
            splitArray = input.split()
        }
    }
}

function processMath(input) {
    const operatorArray = ['+','-','/','*'];
    let operatorSymbol = '';
    let index = 0;
    for (let i = 0; i < 4; i++) {
        if (input.split(operatorArray[i]).length > 1) {
            index = i;
            break;
        }
    }

    operatorSymbol = operatorArray[index];
    const inputArray = input.split(operatorSymbol);
    const operation = operators[operatorSymbol];
    const result = operation(inputArray[0], inputArray[1]);
    return result;
}

function isNumber(value) {
    return !isNaN(value);
  }
