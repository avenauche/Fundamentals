function sum(a, b){
    return a+b;
}


function multiply(a, b){
    return a*b;
}


function reminder(a, b){
    return a%b;
}


// var s = sum(1, 2);
// console.log("s: ", s);




function calculator( cb ){
    return cb
}


var calculatorSum =  calculator( reminder  )

console.log("calculatorSum: ", calculatorSum(5,3))


// higher order function 
// closures

function calculate( a,b ){ 

    return function add(c){
        return a+b+c
    }

}

var c = calculate(3, 5);
console.log(c(6) )


var a = (a) => a
// var a = (b) => { return b }

console.log(  "a(100) : ", a(100)  )




var multiplication = function(a, b){
    return a*b
}

console.log("multiplication(4,5) : ", multiplication(4,5))

//IIFE - Immediately invoked function expression
var output = (function( name ){
    return "hello "+name;
})("avenauche")


console.log(output)

//function chaining

function parent(){

    this.child = function (){
        
        this.innerChild = function(){
            return "inner"
        }

        return this
        
    }
    return this
}
console.log( parent().child().innerChild() )

function calc(){

    return function(a,b){
        return a+b
    }

}

// var a = calc()
console.log( calc()(2,4) )




