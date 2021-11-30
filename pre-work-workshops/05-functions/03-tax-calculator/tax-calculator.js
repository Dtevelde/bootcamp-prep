// YOUR CODE BELOW
function taxCalculator( totalPrice, stateName) {
    let rate = 0
    if (stateName === 'NY') {
        rate = 0.04;
    } else if (stateName === 'NJ')  {
        rate =  0.06625;
    }
    return totalPrice * rate + totalPrice;
    }