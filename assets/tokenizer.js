
export function tokenize(expression) {

    let regex =
        /sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|sqrt|cbrt|root|log|ln|exp|Rand|π|C|P|\d+\.?\d*|[(),+\-*/^%!]/g



    return expression.match(regex) || [];
}

