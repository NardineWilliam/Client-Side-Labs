var shape = prompt("Enter the name of one of the following shapes:\n1-circle\n2-triangle\n3-square\n4-rectangle\n5-parallelogram\n6-trapezium\n7-ellipse");
var area;
switch (shape.toLowerCase()) {
  case "circle":
    var r = Number(prompt("Enter the raduis of the circle"));
    area = Math.PI * Math.pow(r, 2);
    break;

  case "triangle":
    var b = Number(prompt("Enter the base"));
    var h = Number(prompt("Enter the height"));
    area = 0.5 * b * h;
    break;

  case "square":
    var a = Number(prompt("Enter the length of side"));
    area = Math.pow(a, 2);
    break;

  case "rectangle":
    var l = Number(prompt("Enter the length"));
    var w = Number(prompt("Enter the width"));
    area = l * w;
    break;

  case "parallelogram":
    var b = Number(prompt("Enter the base"));
    var h = Number(prompt("Enter the vertical height"));
    area = b * h;
    break;

  case "trapezium":
    var a = Number(prompt("Enter the length of first parallel side"));
    var b = Number(prompt("Enter the length of second parallel side"));
    var h = Number(prompt("Enter the height"));
    area = 0.5 * (a + b) * h;
    break;

  case "ellipse":
    var minor = Number(prompt("Enter the minor axis"));
    var major = Number(prompt("Enter the major axis"));
    a=minor*0.5;
    b=major*0.5;
    area = Math.PI * a * b;
    break;

  default:
    alert("Invalid shape");
}
alert(`The area of the ${shape.toLowerCase()} = ${area}`);