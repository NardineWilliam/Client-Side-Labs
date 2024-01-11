class Person 
{
    #healthRate;

    constructor(fullName,money,sleepMood) 
    {
        this.fullName = fullName;
        this.money=money;
        this.sleepMood=sleepMood;
    }

    set healthRate(value) 
    {
        if(value>100)
            this.#healthRate=100;

        else if(value<0)
            this.#healthRate=0;

        else
            this.#healthRate=value;
    }

    get healthRate() 
    {
        return this.#healthRate;
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
            this.#healthRate = 100;

        else if (meals === 2) 
            this.#healthRate = 75;

        else if (meals === 1) 
                this.#healthRate = 50;
    }

    buy(items) 
    {
        this.money -= items * 10;
    }
}
/**************************************************************************************************************************************/
/**************************************************************************************************************************************/
class Employee extends Person 
{
    #salary;
    workMood;

    constructor(id, email, isManager, fullName, money, sleepMood) 
    {
        super(fullName,money,sleepMood);
        this.id = id;
        this.email = email;
        this.isManager = isManager;
    }

    work(hours) 
    {
        if (hours === 8) 
            this.workMood = 'happy';

         else if (hours > 8) 
            this.workMood = 'tired';

         else 
            this.workMood = 'lazy';
    }

    set salary(value) 
    {
        if(value<1000)
            this.#salary=1000;
        else
            this.#salary=value;
    }

    get salary() {
        return this.#salary;
    }

}
/**************************************************************************************************************************************/
/**************************************************************************************************************************************/
class Office 
{
    constructor(name,employees) 
    {
        this.name = name;
        this.employees = employees;
    }

    getAllEmployees() 
    {
        return this.employees;
    }

    getEmployee(empId) 
    {
        let employee = this.employees.find(emp => emp.id === empId);
        if (employee) 
        {
            if (employee.isManager) 
            {
                let { fullName, id, email, workMood, isManager, healthRate, money,sleepMood } = employee;
                return { fullName, id, email, workMood, isManager, healthRate, money, sleepMood };
            } 
            else 
                return employee; 
        } 
        else 
            return false;
    }

    hire(employee) 
    {
        this.employees.push(employee);
    }

    fire(empId) 
    {
        this.employees = this.employees.filter(emp => emp.id !== empId);
    }
}

/**************************************************************************************************************************************/
/**************************************************************************************************************************************/
let officeName=prompt("Enter the name of your office");
let officeEmployees=[];
let office= new Office(officeName,officeEmployees);

let userInput;
do{
    userInput=prompt("***Enter your choice:***\n-Add new employee (type: add)\n-View all Employees (type: view)\n-Search for an Employee (type: search)\n-Fire an Employee (type: fire)\n-Quit the program (type: q)\n")

    switch(userInput.toLowerCase())
    {
        /******************************/
        //Add Employee
        case 'add':
            let name = prompt('Enter Employee Name:');
            let id = prompt('Enter Employee ID');
            let email = prompt('Enter email:');
            let managerCheck = prompt("Is this Employee a manager? type(yes or no)");
            while(managerCheck!='yes'&& managerCheck!='no')
            {
                alert("Invalid Input! please type: 'yes' or 'no'");
                managerCheck = prompt("Is this Employee a manager? type(yes or no)");
            }
            let isManager=managerCheck.toLowerCase()==='yes';
    
            let salary = Number(prompt('Enter salary:'));
            let hours=prompt("Enter Employee work hours");
            
            employee=new Employee(id,email,isManager,name,5000,"happy");
            employee.salary=salary;
            employee.work(hours);
            employee.eat(3);
            office.hire(employee);
            alert("Employee added succefully!");
        break;
        /******************************/
        //View all Employees
        case 'view':
            let viewEmployees=office.getAllEmployees();
            if(viewEmployees.length>0)
            {
            viewEmployees.forEach((emp) => {
                if (emp.isManager)
                    alert(`Name: "${emp.fullName}"  \nID: "${emp.id}"  \nPosition: "Manager"\n\n`);
                else
                    alert(`Name: "${emp.fullName}" \nID: "${emp.id}"  \nPosition: "Normal Employee"  \nSalary: "${emp.salary}"\n`);
            });
        }
        else
            alert("No Employees in this office!");
        break;
        /******************************/
        //Search for a certain employee by id
        case 'search':
            let myEmployeeId=prompt("Enter Employee ID");
            let myEmployee=office.getEmployee(myEmployeeId);
            if(myEmployee!=false)
            {
                if(myEmployee.isManager)
                    alert(`Name: "${myEmployee.fullName}" \nID: "${myEmployee.id}"  \nPosition: "Manager"\n\n`);
                else 
                    alert(`Name: "${myEmployee.fullName}" \nID: "${myEmployee.id}" \nPosition: "Normal Employee" \nSalary: "${myEmployee.salary}"\n\n`);
            }    
            else
                alert("Employee not found!");
        break;
        /******************************/
        //fire an employee with id
        case 'fire':
            let fireId=prompt("Enter ID of the Employee you want to fire");
            let firedEmployee=office.getEmployee(fireId);
            if(firedEmployee!=false)
            {
                office.fire(fireId);
                alert(`Employee with ID ${fireId} is fired succefully`);
            }
            else
                alert(`Employee with ID ${fireId} is not found!`);
        break;
        /******************************/
        //Exit the program
        case 'q':
        break;
        /******************************/
        //wrong input
        default:
            alert("Invalid choice!");
    }
}while(userInput!=='q');
alert("Exiting the program!");