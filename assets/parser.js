import calc from "./calculator.js";
import { tokenize } from "./tokenizer.js";


export function evaluateExpression(expression) {

    try {
        
        expression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");


        let tokens = tokenize(expression);

        let result = parseExpression(tokens);

        return result;

    } catch {

        return "ERROR";
    }
}


function parseExpression(tokens) {

    return parseAddSubtract(tokens);
}


function parseAddSubtract(tokens) {

    let value = parseMultiplyDivide(tokens);

    while (tokens[0] === "+" || tokens[0] === "-") {

        let operator = tokens.shift();
        let nextValue = parseMultiplyDivide(tokens);

        if (operator === "+") {
            value += nextValue;
        }
        else {
            value -= nextValue;
        }
    }

    return value;
}



function parseMultiplyDivide(tokens) {

    let value = parsePower(tokens);

    while (
        tokens[0] === "*" ||
        tokens[0] === "/" ||
        tokens[0] === "C" ||
        tokens[0] === "P"
    ) {

        let operator = tokens.shift();

        let nextValue = parsePower(tokens);

        if (operator === "*") {

            value *= nextValue;
        }

        else if (operator === "/") {

            value /= nextValue;
        }

        else if (operator === "C") {

            value = calc.ncr(value, nextValue);
        }

        else if (operator === "P") {

            value = calc.npr(value, nextValue);
        }
    }

    return value;
}


function parsePower(tokens) {

    let value = parsePrimary(tokens);

    while (tokens[0] === "^") {

        tokens.shift();

        let exponent = parsePrimary(tokens);

        value = value ** exponent;
    }

    return value;
}


function parsePrimary(tokens) {

    let token = tokens.shift();
    // unary minus
    if (token === "-") {

        return -parsePrimary(tokens);
    }

    

    // Parentheses
    if (token === "(") {

        let value = parseExpression(tokens);

        tokens.shift();

        return value;
    }
// Functions
    if (token === "sin") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.sin(value);
    }


    if (token === "cos") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.cos(value);
    }


    if (token === "tan") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.tan(value);
    }

    if (token === "sinh") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.sinh(value);
    }

    if (token === "cosh") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.cosh(value);
    }

    if (token === "tanh") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.tanh(value);
    }



    if (token === "sqrt") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.sqrt(value);
    }

    if (token === "exp") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.exp(value);
    }


    if (token === "cbrt") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.cbrt(value);
    }


if (token === "root") {

    tokens.shift(); // remove (

    let x = parsePrimary(tokens);

    tokens.shift(); // remove ,

    let y = parsePrimary(tokens);

    tokens.shift(); // remove )

    return calc.root(x, y);
}




    if (token === "log") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.log(value);
    }


    if (token === "ln") {

        tokens.shift();

        let value = parseExpression(tokens);

        tokens.shift();

        return calc.ln(value);
    }


    // factorial
    if (tokens[0] === "!") {

        tokens.shift();

        return calc.fact(Number(token));
    }


    // pi
    if (token === "π") {
        return Math.PI;
    }
    if (token === "Rand") {
        return calc.rand();
    }
    
    return Number(token);
}
