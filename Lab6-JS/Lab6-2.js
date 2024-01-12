class Shape
{
    constructor(name,sides,sideLength)
    {
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }

    calcPerimeter()
    {
        var perimeter=this.sides*this.sideLength;
        console.log(`Perimeter of ${this.name}= ${perimeter}`);
    }
}

class Square extends Shape
{
    constructor(sideLength)
    {
        super("square",4,sideLength);
    }

    calcArea()
    {
        var area=this.sideLength*this.sideLength;
        console.log(`Area of ${this.name}= ${area}`);
    }
}

let square=new Square(5);
square.calcPerimeter();
square.calcArea();
