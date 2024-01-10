var numOfElements=Number(prompt("Enter the number of values to be calculated"));
var arr = [];
for(var i=0;i<numOfElements;i++)
{
    var input=Number(prompt(`Enter value # ${i+1}`));
    arr.push(input);
}

var sum=0;
for(i=0;i<numOfElements;i++)
{
    sum+=arr[i];
}

var avg;
avg=sum/numOfElements;

alert(`Sum= ${sum} \nAverage= ${avg}`);