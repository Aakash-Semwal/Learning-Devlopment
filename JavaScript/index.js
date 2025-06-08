let sum = function(){
    let total = 0 ;
    for(let value of arguments)
        total += value ;
    return total;
}

let ans = sum(1 , 2 , 3 , 4 , 5 , 6);
console.log(ans);