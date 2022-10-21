function sum(a, b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b; //a is the larger number, b is the smaller
}

function division(a,b)
{
    //if b is 0 or a or b are not numbers
    if(b===0 || isNaN(b) || isNaN(a)){
        Error("Invalid number"); //display error message
    } else {
        c = a/b; //otherwise return a/b
        return c;
    }
} 


module.exports = {
    sum,
    subtract, //TODO: uncomment this line to make the subtract function available in other files
    division, 
};