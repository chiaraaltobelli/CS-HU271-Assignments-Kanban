function sum(a, b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b; //a is the larger number, b is the smaller
}


module.exports = {
    sum,
    subtract, //TODO: uncomment this line to make the subtract function available in other files
};