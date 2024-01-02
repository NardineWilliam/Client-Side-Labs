var hour = prompt("Enter hour in value in 24-hour format (0-23)");
if(hour===null)
{
    alert("Exit");
}
else
{
    if (hour<0||hour>23)
    {
        alert("Invalid Input!");
    }
    else
    {
        var convertedHour;
        if(hour%12===0)
        {
            convertedHour=12;
        }
        else
        {
            convertedHour=hour%12;
        }

        var flag;
        if(hour<12)
        {
            flag="AM";
        }
        else
        {
            flag="PM";
        }
        alert(`Converted Hour in 12-hour format is: ${convertedHour} ${flag}`);
    }
}