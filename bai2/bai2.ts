interface Person{
    name: string;
    age: number;
    email: string;
}

function printPeople(personObj: Person){
    console.log(personObj.name, personObj.age, personObj.email);
}

let person1: Person;

person1 = {name: "Vinh", age: 22, email: "vinh@gmail.com"}

printPeople(person1)