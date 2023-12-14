function arrElement<T>(x: T[], y:number){
    if(!x[y])
        return false;
    return x[y];
}

console.log(arrElement<string>(["a", "c"], 1));