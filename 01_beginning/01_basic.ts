let str: string = "hello world";
let int: number;
int = 10;

let undif: undefined;
let nu: null;
let arr: number[];
arr = [1, 2, 3, 4, 5];

let name1: string[] = ["김민재", "손흥민", "오타니"];
let name2: Array<string> = ["김민재", "손흥민", "오타니"];

let messi: Array<number | string> = [10, "메시"]
let sonny: (string | number)[] = ["손흥민", 7]
let otani: string | number = "오타니";
otani = 17;

let obj: object = {
    name: "krille",
};

console.log(str);
console.log(int);
console.log(undif);
// console.log(nu);

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
