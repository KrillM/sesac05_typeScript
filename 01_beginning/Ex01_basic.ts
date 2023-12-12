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

// tuple
let drink: [string, number] = ["코카콜라제로", 2300]
console.log(drink[0])
drink[0] = "스프라이트";

// drink[2] = "라면"; 얘는 잡아도 push는 안 잡음...
drink.push("라면");
console.log(drink); // [ '스프라이트', 2300, '라면' ]

// readonly는 어떠한 경우에도 변경 X
let drink2: readonly [string, number] = ["코카콜라제로", 2300]
// drink2[0] = "스프라이트";

// enum
enum choiceA {
    art = "a",
    bus = "b", 
    cat = "c"
}
console.log(choiceA.cat);

enum choiceN {
    admin,
    user,
    guest
}
console.log(choiceN.user);

const admin = 0;
if(admin == choiceN.admin){
    console.log("관리잡니다.")
}

let crew: choiceN = 1; // 범위 벗어나면 X

enum McDonalds {
    BigMac,
    SamuraiMac,
    Bulgogi
}
console.log(McDonalds.BigMac);