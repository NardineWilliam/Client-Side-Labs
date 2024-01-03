//Part1-Lab2 Bonus
var result;

while (true)
{
    if (result===undefined)
        {
             var firstNum = Number(prompt("Enter the first number"));
        }
    else
        {
          var firstNum = result;
        }

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


    var more=confirm("Do you want to perform another operation?");
    if(more==false)
    {
        break;
    }
}

 