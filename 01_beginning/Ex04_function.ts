// #1. optional 매개변수
function sum(a: number, b:number, c?:number): number{
    if(c) return a + b + c;
    return a + b;
}
console.log(sum(1, 2));

const helloCity = (city: string):string => {
    return "Hello "+city;
}
console.log(helloCity("Sedney"));

interface Calculator{
    sum: (a: number, b: number) => number;
    sub?: () => void
}

const calc: Calculator = {
    sum: sum
}

function goingOn(): never {
    while(true){
        console.log("go");
    }
}

// #2. void: 함수 자체의 return 값이 없을 때 사용한다.
// overroading : 형태가 다르나 함수의 이름을 공유해 사용 편의를 증진한다.

// 타입은 여러번 선언하되
function hello(num: number): number;
function hello(str1: string, str2: string): string;

// 상자는 한 번만 구현되어야 한다.
function hello(param1: any, param2?: any){
    console.log(param1);
    console.log(param2);
    return param1;
}

hello(1)
hello("hello", "world")
