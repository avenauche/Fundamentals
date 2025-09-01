function init() {

    function getDigitsMap(){
        return {
            0: {
                a: 1,
                b: 1,
                c: 1,
                d: 1,
                e: 1,
                f: 1,
                g: 0
            },

            1: {
                a: 0,
                b: 1,
                c: 1,
                d: 0,
                e: 0,
                f: 0,
                g: 0
            },

            2: {
                a: 1,
                b: 1,
                c: 0,
                d: 1,
                e: 1,
                f: 0,
                g: 1
            },

            3: {
                a: 1,
                b: 1,
                c: 1,
                d: 1,
                e: 0,
                f: 0,
                g: 1
            },

            4: {
                a: 0,
                b: 1,
                c: 1,
                d: 0,
                e: 0,
                f: 1,
                g: 1
            },

            5: {
                a: 1,
                b: 0,
                c: 1,
                d: 1,
                e: 0,
                f: 1,
                g: 1
            },

            6: {
                a: 1,
                b: 0,
                c: 1,
                d: 1,
                e: 1,
                f: 1,
                g: 1
            },

            7: {
                a: 1,
                b: 1,
                c: 1,
                d: 0,
                e: 0,
                f: 0,
                g: 0
            },

            8: {
                a: 1,
                b: 1,
                c: 1,
                d: 1,
                e: 1,
                f: 1,
                g: 1
            },

            9: {
                a: 1,
                b: 1,
                c: 1,
                d: 1,
                e: 0,
                f: 1,
                g: 1
            },
        }
    }

    function setDateTens(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.date .tens .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.date .tens .${key}`).classList.replace("show", "hide")
            }
        }
    }

    function setDateOnes(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.date .ones .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.date .ones .${key}`).classList.replace("show", "hide")
            }
        }
    }


    function setMonthTens(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.month .tens .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.month .tens .${key}`).classList.replace("show", "hide")
            }
        }
    }

    function setMonthOnes(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.month .ones .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.month .ones .${key}`).classList.replace("show", "hide")
            }
        }
    }


    function setYearThousands(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.year .thousands .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.year .thousands .${key}`).classList.replace("show", "hide")
            }
        }
    }


    function setYearHundreds(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.year .hundreds .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.year .hundreds .${key}`).classList.replace("show", "hide")
            }
        }
    }

    function setYearTens(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.year .tens .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.year .tens .${key}`).classList.replace("show", "hide")
            }
        }
    }

    function setYearOnes(digitsMap) {
        for (key of Object.keys(digitsMap)) {
            if (digitsMap[key] === 1) {
                document.querySelector(`.year .ones .${key}`).classList.replace("hide", "show")
            } else {
                document.querySelector(`.year .ones .${key}`).classList.replace("show", "hide")
            }
        }
    }

    function setDate(d){
        const digits = getDigitsMap()
        const date = d.getDate();
        // const date = d.getHours();
        const [dateTens, dateOnes] = date.toString().padStart(2, "0").split("");

        setDateTens(digits[dateTens]);
        setDateOnes(digits[dateOnes]);
    }

    function setMonth(d){
        const digits = getDigitsMap()
        const month = d.getMonth()+1;
        // const month = d.getMinutes();
        const [monthTens, monthOnes] = month.toString().padStart(2, "0").split("");

        setMonthTens(digits[monthTens]);
        setMonthOnes(digits[monthOnes]);
    }

    function setYear(d){
        const digits = getDigitsMap()
        const year = d.getFullYear();
        // const year = d.getSeconds();
        const [yearThousands, yearHundreds, yearTens, yearOnes] = year.toString().padStart(4, "0").split("");
        
        setYearThousands(digits[yearThousands]);
        setYearHundreds(digits[yearHundreds]);
        setYearTens(digits[yearTens]);
        setYearOnes(digits[yearOnes]);
    }

    function setup() {
        const d = new Date();
        setDate(d);
        setMonth(d);
        setYear(d);
    }

    setInterval(() => {
        setup();
    }, 100);
    



}