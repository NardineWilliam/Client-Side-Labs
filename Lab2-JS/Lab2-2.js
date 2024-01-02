var str = prompt("Enter a String");

if(str === null)
{
    alert("Exit");
}

else
{
    var count=0;
    for(let ch of str)
    {
        if (ch==='a'||ch==='A'||ch==='e'||ch==='E'||ch ==='i'||ch ==='I'||ch==='o'||ch==='O'||ch==='u'||ch==='U')
        {
            count++;
        }
    }
    alert(`Number of vowels in the string = ${count}`);
}