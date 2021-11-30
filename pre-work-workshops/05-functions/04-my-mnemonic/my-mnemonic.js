// YOUR CODE BELOW
function myMnemonic (firstString, secondString, thirdString, fourthString) {
    let result = '';
    if (firstString !== undefined) {
        result = firstString[0];
    }
    if (secondString !== undefined) {
        result = result +  secondString[0];
    }
    if (thirdString !== undefined) {
        result = result + thirdString[0];
    }
    if (fourthString !== undefined) {
        result = result + fourthString[0];
    }
    return result
}