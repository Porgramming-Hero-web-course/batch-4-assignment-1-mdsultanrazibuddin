//  Problem 6 :
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile ( profile: profile, update: Partial <profile>): profile {
    const updated = { ...profile, ...update };
    return updated;
}


// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: 'Sultan', age: 29, email:'sultan@gmail.com' }));