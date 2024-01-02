while (true)
{
    var input = prompt("Enter your Age");
    if(input === null)
    {
      break;
    }      
    
    age=Number(input);
    if(age<=0)
    {
        alert("Age must be a positive value");
        continue;
    }

    else
    {
       if(age<=10)
       {
        alert("Child");
       }
       else if (age>10&&age<=18)
       {
        alert("Teenager");
       }
       else if(age>18&&age<=50)
       {
        alert("Grown up");
       }
       else if(age>50)
       {
        alert("Old");
       }
    }

}