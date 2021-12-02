// YOUR CODE BELOW
function myGreeting(name) {
let result = '';
if (name === undefined) {
    result = 'hello!';
} else {
    result = 'hello ', + name, + '!';
}
return result;
}