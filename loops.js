function init() {

    var i=0;
    
    // for ( ;i < 10; i+=2 ) {
    //     console.log("i = ", i)
    // }


    // while(i<10){
    //     console.log("while: i= ", i);
    //     i++;
    // }


    // do {
    //     console.log("do while: i= ", i);
    //     i++;
    // } while(i<10) 


    // var options = document.querySelectorAll("#testSelect option");
    // console.log( options)

    // for(i=0; i<options.length; i++) {
    //     if( options[i].getAttribute("selected") != null ) {
    //         options[i].removeAttribute("selected")
    //     }
    // }

    // var count = options.length;
    // var lastElem = count -1
    // options[lastElem].setAttribute("selected", "")

    


    var country = document.querySelector("#country");


    country.addEventListener("change", (e) => {

        console.log("chosen country: ", country.value)


        // hide all states
        var Allstates = document.querySelectorAll("[name='state']");

        for(i=0; i<Allstates.length; i++){
            Allstates[i].setAttribute("style", "display:none;");
        }


        const countryID = "#"+country.value

        var states = document.querySelector(countryID);
        states.removeAttribute("style")


        states.addEventListener("change", (e) => {
            console.log(e.target.value)
        })

    })


}

