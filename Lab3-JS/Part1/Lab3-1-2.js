//Part1-Lab2 Calc
var firstNum = Number(prompt("Enter the first number"));
var operation = prompt("Enter the name of the operation: \nsum \nsubtract \nmultiply \ndivision \nmodulus");
var secondNum = Number(prompt("Enter the second number"));
var result;
switch(operation)
{
    case "sum":
        result=firstNum+secondNum;
        break;
    case "subtract":
        result=firstNum-secondNum;
        break;    
    case "multiply":
        result=firstNum*secondNum;
        break;
    case "division":
        result=firstNum/secondNum;
        break;
    case "modulus":
        result=firstNum%secondNum;
        break;
    default:
        result="Invalid Operation";                
}
alert(`The result of the ${operation} operation= ${result}`);
