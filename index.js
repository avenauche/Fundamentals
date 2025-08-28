function init(){

    var color;

    color="orange"

    if( color === "red" ){
        console.log("stop")
    } else if(color === "yellow") {
        console.log("slow down")
    } else if(color === "orange") {
        console.log("slow down")
    } else {
        console.log("send")
    }


    color = "green";
    switch(color){

        case "green":
            console.log("switch: send")
            break;

        case "red":
            console.log("switch: stop")
            break;
        
        default:
            console.log("switch: slow down")
    }


    color = "yellow"


    var options = {
        "green" : "send",
        "red" : "stop",
        "yellow": (() => { return "slow down 2" })()
    }

    if( options[color] ){
        console.log( "options: ", options[color] )
    } else {
        console.log( "options: ", "slow down" )
    }

}

