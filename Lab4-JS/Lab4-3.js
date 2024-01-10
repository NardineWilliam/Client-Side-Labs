const Person3 = {
    init(fullName, money, sleepMood, healthRate) 
    {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
    sleep(hours) 
    {
      if (hours === 7) 
        this.sleepMood = "happy";

      else if (hours < 7) 
        this.sleepMood = "tired";

       else 
        this.sleepMood = "lazy";
    },
  
    eat(meals)
    {
        if (meals === 3) 
            this.healthRate = 100;

        else if (meals === 2) 
            this.healthRate = 75;

        else if (meals === 1) 
            this.healthRate = 50;
    },
  
    buy(items) 
    {
      this.money -= items * 10;
    },
  };

const person = Object.create(Person3);
person.init("Nardine William", 500, "happy", 95);
person.sleep(5);
person.eat(1);
person.buy(3);
console.log(person);