//Part1-Lab1 Login
var userName= prompt("Enter User Name");
var password= prompt("Enter Password");
if(userName==="admin"&&password==="421$$")
{
    alert("Welcome Login Success");
}
else if(userName!=="admin"&&password==="421$$")
{
    alert("Wrong Username");
}
else if(userName==="admin"&&password!=="421$$")
{
    alert("Wrong password");
}
else
{
    alert("Wrong username and password");
}