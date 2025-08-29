var input = 5;
var threshold = 10;



// if(input>threshold){
//     console.log("your number is greater than 10")
// } else {
//     console.log("your number is lesser than 10")
// }


// (input>threshold) ? console.log("your number is greater than 10") : console.log("your number is lesser than 10")


// var message = (input>threshold) ? "your number is greater than 10" : "your number is lesser than 10"
// console.log(message)



function init() {
    var options = document.querySelectorAll("#country option")
    // console.log(options)

    // options.forEach(function (value, key) {

    //     if(value.selected !== true){
    //         console.log(value.textContent)
    //     }
    // })


    // for (i = 0; i < Array.from(options.entries()).length; i++) {
    //     console.log(options.entries().next().value)
    // }


    // for(var option of options){
    //     if(option.selected !== true){
    //         console.log(option.textContent)
    //     }
    // }

    // const delay = 5*1000
    
    // setTimeout(function(testParam){
    //     console.log("im printing after 5 seconds: "+testParam)
    // }, delay, "test")



    // config = { "b": 99, "a": "1"  }



    // function sum(config = {}){

    //     const p1 = parseInt(config.a)
    //     const p2 = config.b


    //     return p1+p2;


    // }

    // var out = sum({ "b":99, "a": "1",   })
    // console.log(out)




    // function add(param = []){
    //     let out = 0;    
    //     for(var i=0; i<param.length; i++){
    //         out+=param[i];
    //     }
    //     return out;
    // }


    // console.log("add: ",add([1,2,3,4]))




    function welcome(name){
        console.log("Hello "+name);
    }


    let handle = setInterval(welcome, 1000, "india")


    setTimeout(()=>clearInterval(handle), 5000);



}


