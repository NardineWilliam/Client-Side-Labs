//Using Constructor functions
function Person1(fullName, money, sleepMood, healthRate) 
{
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;

    this.sleep = function (hours) 
    {
        if (hours === 7) 
            this.sleepMood = "happy";

        else if (hours < 7) 
            this.sleepMood = "tired";
        
        else 
            this.sleepMood = "lazy";
    };

    this.eat = function (meals) 
    {
        if (meals === 3) 
            this.healthRate = 100;

        else if (meals === 2) 
            this.healthRate = 75;

        else if (meals === 1) 
            this.healthRate = 50;
    };

    this.buy = function (items) 
    {
        this.money -= items * 10;
    };
}

let person2 = new Person1("Nardine William", 500, "happy", 90);
person2.sleep(5);
person2.eat(1);
person2.buy(3);
console.log(person2);