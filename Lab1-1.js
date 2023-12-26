var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var isFullName = confirm(`Is your Full Name: ${firstName} ${lastName}?`);

if(isFullName==true)
{
    var birthYear = Number(prompt("Enter your Birth Year"));
    var currentYear=new Date().getFullYear();

    if (isNaN(birthYear)|| birthYear>currentYear) 
     {
        alert("This is not a valid birth year!");
     }

     else
     {
        var age= currentYear - birthYear; 
        alert(`Welcome ${firstName} ${lastName}! You are ${age} years old`);
     }
   
}

else
{
alert("Sorry there must be a mistake, try running the program again!");
} 