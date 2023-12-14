interface Person{
    name: string;
    age: number;
}

interface Korean extends Person{
    home: string;
    talk: () => void;
}

const person: Person = { name: "", age: 90 };
const korean: Korean = { 
    name: "", 
    age: 27, 
    home:"서울", 
    talk: () => console.log("") };