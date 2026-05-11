
function factorial(num) {

    if (num < 0) return NaN;

    if (num === 0) return 1;

    return num * factorial(num - 1);
}

const calc = {
    
    // TRIGONOMETRIC FUNCTIONS
    
    sin: (x) => {

        let rad = x * Math.PI / 180;

        return Number(Math.sin(rad).toFixed(10));
    },

    cos: (x) => {

        let rad = x * Math.PI / 180;

        return Number(Math.cos(rad).toFixed(10));
    },

    tan: (x) => {

        let rad = x * Math.PI / 180;

        return Number(Math.tan(rad).toFixed(10));
    },
    
    // INVERSE TRIGONOMETRIC
    
    asin: (x) => {

        return Number(
            (Math.asin(x) * 180 / Math.PI).toFixed(10)
        );
    },

    acos: (x) => {

        return Number(
            (Math.acos(x) * 180 / Math.PI).toFixed(10)
        );
    },

    atan: (x) => {

        return Number(
            (Math.atan(x) * 180 / Math.PI).toFixed(10)
        );
    },

    // HYPERBOLIC FUNCTIONS
    
    sinh: (x) => {

        return Number(Math.sinh(x).toFixed(10));
    },

    cosh: (x) => {

        return Number(Math.cosh(x).toFixed(10));
    },

    tanh: (x) => {

        return Number(Math.tanh(x).toFixed(10));
    },
    
    // ROOT FUNCTIONS


    sqrt: (x) => Math.sqrt(x),

    cbrt: (x) => Math.cbrt(x),

    // LOG FUNCTIONS
    
    log: (x) => Math.log10(x),

    ln: (x) => Math.log(x),

    exp: (x) => Math.exp(x),
 
    // POWER FUNCTIONS 

    square: (x) => x ** 2,

    cube: (x) => x ** 3,
  
    root: (x, y) => {

        return Math.pow(x, 1 / y);
    },
  
    // RANDOM
   
    rand: () => Math.random(),
   
    // FACTORIAL
    
    fact: factorial,
   
    // COMBINATIONS & PERMUTATIONS   

    ncr: (n, r) => {

        return factorial(n) / (
            factorial(r) *
            factorial(n - r)
        );
    },

    npr: (n, r) => {

        return factorial(n) /
            factorial(n - r);
    },
   
    // CONSTANTS

    pi: () => Math.PI,

    e: () => Math.E
};

export default calc;

