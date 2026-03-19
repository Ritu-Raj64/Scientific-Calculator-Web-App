import { evaluateExpression } from "../assets/parser.js";

   
    const display = document.querySelector(".textarea");
    const buttons = document.querySelectorAll(".btn");
    let isSecond=false;
    function insertFunction(name){

        let cursor = display.selectionStart;
        let text = display.value;
      
        if(name.includes("^") || name.includes("π") || name.includes("C") || name.includes("P")){
            let newText =
            text.slice(0,cursor) +
            name +
            text.slice(cursor);

        display.value = newText;

        display.setSelectionRange(cursor + name.length + 1, cursor + name.length + 1);
        display.focus();
        }else{
            let newText =
            text.slice(0,cursor) +
            name + "(" +
            text.slice(cursor);

        display.value = newText;

        display.setSelectionRange(cursor + name.length + 1, cursor + name.length + 1);
        display.focus();
        }
    }

    function deleteValue(){

        let cursor = display.selectionStart;
        let text = display.value;

        if(cursor > 0){

            display.value =
                text.slice(0,cursor-1) +
                text.slice(cursor);

            display.setSelectionRange(cursor-1,cursor-1);
        }

        display.focus();
    }


    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            let value = button.textContent.trim();
             
            if(value === "AC"){
                display.value = "";
                return;
            }

            if(button.dataset.action === "delete"){
                deleteValue();
                return;
            }

            if(value === "="){
                let result = evaluateExpression(display.value);
                display.value=display.value+"\n="+result+"\n";
                return;
            }

           
            if(value==="2nd"){
                isSecond=!isSecond
                
                return;
            }
            if(value==="mc"){
                return;
            }
            if(value==="m+"){
                return;
            }
            if(value==="m-"){
                return;
            }
            if(value==="mr"){
                return;
            }


            let fn = button.dataset.fn;

            if(fn){
                insertFunction(fn);
                return;
            }

            let cursor = display.selectionStart;
            let text = display.value;

            display.value =
                text.slice(0,cursor) +
                value +
                text.slice(cursor);

            display.setSelectionRange(cursor + value.length, cursor + value.length);
            display.focus();

        });

    });

