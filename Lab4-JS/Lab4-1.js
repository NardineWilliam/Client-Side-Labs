//Using Classes
class Person 
{
    constructor(fullName, money, sleepMood, healthRate) 
    {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) 
    {
        if (hours === 7) 
            this.sleepMood = "happy";
        
        else if (hours < 7)   
            this.sleepMood = "tired";
        
        else 
            this.sleepMood = "lazy";
    }

    eat(meals) 
    {
        if (meals === 3) 
            this.healthRate = 100;

        else if (meals === 2) 
            this.healthRate = 75;

        else if (meals === 1) 
                this.healthRate = 50;
    }

    buy(items) 
    {
        this.money -= items * 10;
    }

}

let person1 = new Person("Nardine William", 500, "happy", 90);
person1.sleep(5);
person1.eat(1);
person1.buy(3);
console.log(person1);