type gender = "Male" | "Female";
const yena: gender = 'Female';

// 이름과 가격
type beer = [string, number]
const kozel: beer = ["Kozel", 3900]

// 객체에 대한 타입을 지정할 경우 (인터페이스)
interface Beer {
    name: string;
    price: number;
}
const asahi: Beer = {name: "asahi", price: 3000};

// 객체에 대한 타입을 지정할 경우 (타입)
type beer3 = {
    name: string;
    price: number; 
    sale?: number; // ? nullable = true
}
const terra: beer3 = {name:"terra", price: 2500};

interface Dealer {
    name: string;
}

interface beverage {
    name: string;
    price: number; 
    sale?: object;
    dealer?: Dealer;
}

const soju: beverage ={ 
    name: "참이슬",
    price: 1900,
    dealer: {name: "이정근"},
};

// optional chaining
console.log(soju.dealer?.name) // ?가 있으면 같이 적어주어야 한다.