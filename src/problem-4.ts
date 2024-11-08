// Problem 4 :
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape: 'circle';
    radius: number;
  }

 type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  }
  
type Shape = Circle | Rectangle;
  
function calculateShapeArea(figure:Shape): number {
  if (figure.shape === "circle") {
    const calculateArea = (figure.radius * figure.radius * Math.PI);
    const calculateValue = parseFloat(calculateArea.toFixed(2))
    return calculateValue;

  } 
  else {
    return figure.width * figure.height;
  }
}



// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);


// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log(rectangleArea);


