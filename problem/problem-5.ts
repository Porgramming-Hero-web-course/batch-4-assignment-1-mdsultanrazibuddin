//  Problem 5 :
// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

    

function getProperty <T, K extends keyof T> (object:T, key:K) : T[K]{
    const property = object[key]; 
    return property;
}


// const person = { name: "Alice", age: 30 };   
// const getOutput1 = getProperty(person, "name")
// const getOutput2 = getProperty(person, "age")
// console.log(getOutput1);
// console.log(getOutput2);
        



