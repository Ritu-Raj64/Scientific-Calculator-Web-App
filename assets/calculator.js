function factorial(num){
    if(num<0){
        return NaN;
    }else{
        if(num===0){
            return 1;
        }else{
            return num*factorial(num-1)
        }
    }
}

const calc={
    sin:(x)=>{
        let rad=x*Math.PI/180;
        return Number(Math.sin(rad).toFixed(10));
    },
    cos:(x)=>{
        let rad=x*Math.PI/180;
        return ( Number(Math.cos(rad).toFixed(10)));
    },
    tan:(x)=>{
        let rad=x*Math.PI/180;
        return Number(Math.tan(rad).toFixed(10));
    },
    sinh:(x)=>{
        return Number(Math.sinh(x).toFixed(10));
    },
    cosh:(x)=>{
        return Math.cosh(x);
    },
    tanh:(x)=>{
        return Math.tanh(x);
    },
    asin:(x)=>{
        return Number((Math.asin(x) * 180/Math.PI).toFixed(10));
    },
    acos:(x)=>{
        return Number((Math.acos(x) * 180/Math.PI).toFixed(10));
    },
    atan:(x)=>{
        return Number((Math.atan(x) * 180/Math.PI).toFixed(10));
    },
    rand:(x)=>{
        return Math.random()*x;
    },
    fact:factorial,
    ncr:(n,r)=>{
        return factorial(n)/(factorial(r)*factorial(n-r));
    },
    npr:(n,r)=>{
        return factorial(n)/(factorial(n-r));
    }

}


export default calc;