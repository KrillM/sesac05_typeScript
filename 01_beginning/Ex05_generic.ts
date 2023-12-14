function printXYByGeneric<T> (x: T, y: T) {
    console.log(x, y);
}
printXYByGeneric<string>("Hello","World")
printXYByGeneric<number>(1, 2);

function arrLength<T> (arr: T[]){
    return arr.length;
}

const len1 = arrLength<number>([1,2,3,4,5,6,7,8,9]);
const len2 = arrLength<string>(["영조", "정조", "순조"]);
console.log(len1 + len2);

function exGeneric<T, U>(x: T, y: U) {
    console.log(x, y);
}
exGeneric<string, number>("손흥민", 7);
let a: string[];
let b: Array<string>;

interface Von<T> {
    company: string,
    model: string,
    price: number,
    option: {}
}

interface SamsungOption {
    a: string,
    s: string,
    z: number
}

interface AppleOption {
    pro: number
    se: string
}

const galaxy23: Von<SamsungOption> = {
    company: "samsung",
    model: "galaxy S23",
    price: 1150000,
    option: {
        a: 'a',
        s: 's',
        z: 2
    }
}

const iPhone15: Von<AppleOption> = {
    company: "apple",
    model: "iPhone 15",
    price: 1150000,
    option: {
        pro: 150,
        se: "cheap"
    }
}