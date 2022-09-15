
function parcalc() {                            // räknar allt inanför paranteser

    wayLength = waypar.length
    fixlist(waypar, clospar, wayLength)     // ser till att det inte fins tomm rum i mina arrayer

    if (waypar.length == 0){                           // om det bara står nummer
        parAnswer = clospar[0]
    }
    

    unshift(waypar, clospar)
    console.log("test co1 " + clospar)
    console.log("test way1 " + waypar)


    wayLength = waypar.length
    parAnswer = percent(waypar, clospar, wayLength, parAnswer)                      //räknar procent för paranteser


    fixlist(waypar, clospar, wayLength) 


    wayLength = waypar.length
    parAnswer = toThePowerOf(waypar, clospar, wayLength, parAnswer)               //räknar upphöjt till för paranteser
    

    fixlist(waypar, clospar, wayLength) /


    unshift(waypar, clospar)
    console.log("test co2 " + clospar)
    console.log("test way2 " + waypar)

    wayLength = waypar.length
    parAnswer = timesAndDevided(waypar, clospar, wayLength, parAnswer)           //räknar diviton och gånger för parantser


    fixlist(waypar, clospar, wayLength) 


    unshift(waypar, clospar)
    console.log("test co3 " + clospar)
    console.log("test way3 " + waypar)

    wayLength = waypar.length
    parAnswer = plusAndMinus(waypar, clospar, wayLength, parAnswer)              //räknar plus och minus för parantser


    fixlist(waypar, clospar, wayLength) 


    console.log("test co4 " + clospar)
    console.log("test way4 " + waypar)

    wayLength = waypar.length
    for (let i = 0; i < waypar.length; i++) {                            // räknar roten ur
        if (waypar[i] == "√"){
            parAnswer = Math.sqrt(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
    }

    for (let i = 0; i < waypar.length; i++) {                            // räknar tan, sin och cos
        if (waypar[i] == "tan"){
            parAnswer = Math.tan(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "sin"){
            parAnswer = Math.sin(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "cos"){
            parAnswer = Math.cos(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
    }


    for (let i = 0; i < waypar.length; i++) {                            // räknar arktan, arksin och arkcos
        if (waypar[i] == "atan"){
            parAnswer = Math.atan(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "asin"){
            parAnswer = Math.asin(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "acos"){
            parAnswer = Math.acos(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
    }


    for (let i = 0; i < waypar.length; i++) {                            // räknar ln och log
        if (waypar[i] == "ln"){
            parAnswer = Math.log(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "log"){
            parAnswer = Math.log10(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
    }


    if (parAnswer == undefined){           // om det inte fins någon inut i paranteserna så bugar den inte                
        parAnswer = ""
    }
    
    waypar.length = 0           // resetar
    clospar.length = 0;
}


