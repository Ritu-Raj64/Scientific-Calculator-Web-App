
import { evaluateExpression } from "../assets/parser.js";

const display = document.querySelector(".textarea");
const buttons = document.querySelectorAll(".btn");

let isSecond = false;



// INSERT FUNCTION

function insertFunction(name) {

    let cursor = display.selectionStart;
    let text = display.value;

    // functions without brackets
    if (
        name.includes("^") ||
        name.includes("π") ||
        name.includes("C") ||
        name.includes("P")
    ) {

        let newText =
            text.slice(0, cursor) +
            name +
            text.slice(cursor);

        display.value = newText;

        display.setSelectionRange(
            cursor + name.length,
            cursor + name.length
        );

        display.focus();
    }

    // functions with brackets
    else {

        let newText =
            text.slice(0, cursor) +
            name + "(" +
            text.slice(cursor);

        display.value = newText;

        display.setSelectionRange(
            cursor + name.length + 1,
            cursor + name.length + 1
        );

        display.focus();
    }
}


// DELETE FUNCTION


function deleteValue() {

    let cursor = display.selectionStart;
    let text = display.value;

    if (cursor > 0) {

        display.value =
            text.slice(0, cursor - 1) +
            text.slice(cursor);

        display.setSelectionRange(
            cursor - 1,
            cursor - 1
        );
    }

    display.focus();
}



// BUTTON EVENTS

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = button.textContent.trim();

           // CLEAR
        if (value === "AC") {

            display.value = "";
            return;
        }

           // DELETE
        
        if (button.dataset.action === "delete") {

            deleteValue();
            return;
        }

 
        // EVALUATE
        
        if (value === "=") {

            let result = evaluateExpression(display.value);

            display.value = result;

            return;
        }
  
        // SECOND BUTTON
        
        if (value === "2nd") {

            isSecond = !isSecond;

            console.log("Second mode:", isSecond);

            return;
        }
    
        // MEMORY BUTTONS
        
        if (
            value === "mc" ||
            value === "m+" ||
            value === "m-" ||
            value === "mr"
        ) {

            return;
        }
   
        // FUNCTIONS
        
        let fn = button.dataset.fn;

        if (fn) {

            insertFunction(fn);

            return;
        }
  
        // NORMAL INPUT
        
        let cursor = display.selectionStart;
        let text = display.value;

        display.value =
            text.slice(0, cursor) +
            value +
            text.slice(cursor);

        display.setSelectionRange(
            cursor + value.length,
            cursor + value.length
        );

        display.focus();
    });
});

// KEYBOARD SUPPORTS

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    let key = event.key;

    
    // ENTER
    
    if (key === "Enter") {

        event.preventDefault();

        let result = evaluateExpression(display.value);

        display.value = result;

        return;
    }

    // BACKSPACE

    if (key === "Backspace") {

        deleteValue();

        event.preventDefault();

        return;
    }

    // ALLOWED KEYS
    
    let allowedKeys =
        "0123456789+-*/()!,.%^";

    if (allowedKeys.includes(key)) {

        event.preventDefault();

        let cursor = display.selectionStart;

        let text = display.value;

        display.value =
            text.slice(0, cursor) +
            key +
            text.slice(cursor);

        display.setSelectionRange(
            cursor + 1,
            cursor + 1
        );

        display.focus();
    }


});
 // toggler btn
const toggleBtn =
    document.querySelector(".toggle-btn");

const scientificPanel =
    document.querySelector(".scientific-panel");


/* default visible */

// scientificPanel.classList.add("show");


toggleBtn.addEventListener("click", () => {

    scientificPanel.classList.toggle("show");
});

