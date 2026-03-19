import calc from "./calculator.js";

export function evaluateExpression(expression){

    try{

        let exp = expression

        .replace(/\++/g,"+")
        .replace(/×+/g,"×")
        .replace(/÷+/g,"÷")
        .replace(/−+/g,"−")

        .replace(/×/g,"*")
        .replace(/÷/g,"/")
        .replace(/−/g,"-")
        .replace(/e\^(\d+)/g, "Math.exp($1)")
        .replace(/(\d+)√\((.*?)\)/g,"Math.pow($2,1/$1)")
        .replace(/asin/g,"calc.asin")
        .replace(/acos/g,"calc.acos")
        .replace(/atan/g,"calc.atan")
        .replace(/\^/g,"**")

        .replace(/π/g,"Math.PI")

        .replace(/(\d+)!/g,"calc.fact($1)")
        .replace(/(\d+)C(\d+)/g,"calc.ncr($1,$2)")
        .replace(/(\d+)P(\d+)/g,"calc.npr($1,$2)")

        .replace(/sin/g,"calc.sin")
        .replace(/cos/g,"calc.cos")
        .replace(/tan/g,"calc.tan")

        .replace("sinh","sinh")
        .replace("cosh","cosh")
        .replace("tanh","tanh")
        

        .replace(/log10/g,"Math.log10")
        .replace(/ln/g,"Math.log")

        .replace(/Rand/g,"calc.rand")

        .replace(/√/g,"Math.sqrt")
        .replace(/∛/g,"Math.cbrt");
        console.log(exp);
        
        return eval(exp);

    }
    catch{
        return "ERROR";
    }

}