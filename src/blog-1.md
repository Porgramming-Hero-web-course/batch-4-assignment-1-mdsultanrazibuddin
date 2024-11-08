Blog - 1 : The significance of union and intersection types in Typescript.

Union types and Intersection types are very important in Typescript, as they simplify data type management and increase code flexibility and safety.

By using Union Type, we can hold more than one type in a variable. Suppose, a variable can be either String or Number . then we will use Union Type ' | ' operator.

    For Example: 
    type Developer1 = 'frontend' | 'backend';
    type Developer2 = 'Javascript' | 'typescript';
    type Developer = Developer1 | Developer2;
    const newDeveloper : Developer1 = 'backend';


By using Intersection Types, we can allow a variable to hold more than one type of property. This allows use to create combinations of two or more types. 
It is used through the ' & ' operator. 

    For Example:
    type FrontendDeveloper1 = {
        skill: string[];
        designation1: 'frontend';
    } 
    type BackendDeveloper1 = {
        skill: string[];
        designation2: 'backend';
    } 

    type FullstackDeveloper = FrontendDeveloper1 & BackendDeveloper1;

    const fullstackDeveloper : FullstackDeveloper = {
        skill: ['HTML', 'CSS', 'NODE'],
        designation1: 'frontend';
        designation2: 'backend';
    };
    