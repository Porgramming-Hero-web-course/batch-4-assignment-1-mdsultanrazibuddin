// Problem 2 :
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed.Preserve the original order of elements.

function removeDuplicates (arr: number[]): number[] {
    const remove = arr.filter((Number, index) => arr.indexOf(Number) === index)
    return remove;
}


// const newArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5,5,6,6]);
// console.log(newArray);
