/* const tambah1 = (x) => x+1;
function foo(x = 1,y){
    return x + y + 1;
}
console.log(tambah1(1));
console.log(foo(null,2)); */

/* (function (x = 99){
    console.log(x+1);
})(); */

/* 
const foo = (x = 0) => {console.log("bois");return x+1;};
console.log(foo()); */



function loop(x){
    if (x>=10){
        return console.log("done");
    }else{
        console.log("bois");
    }
    loop(x+1);
}

(loop(1))