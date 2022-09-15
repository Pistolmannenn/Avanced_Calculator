
function fixlist(waylist, closlist, length){                        // tar bort allt tommrum ifrån mina arryas
    for (let i = 0; i < length; i++){ 
        if (waylist[i] == ""){ 
            if (i == 0){ 
                waylist.shift() 
                i -= 1;
            }
            else{
                waylist.splice(i, 1) 
                i -= 1;
            }
        }
        if (closlist[i] == ""){
            if (i == 0){ 
                closlist.shift() 
                i -= 1;
            }
            else{
                closlist.splice(i, 1) 
                i -= 1;
            }
        }
    }
}


function timesAndDevided(waylist, closlist, length, answ){                // räknar gånger och divition
    for (let i = 0; i < length; i++) { 
        if (waylist[i] == "*"){
            answ = parseFloat(closlist[i]) * parseFloat(closlist[i+1]);
            closlist[i+1] = answ.toString();
            waylist[i] = "";
            closlist[i] = "";
            
        }
        if (waylist[i] == "/"){
            answ = parseFloat(closlist[i]) / parseFloat(closlist[i+1]);
            closlist[i+1] = answ.toString();
            waylist[i] = "";
            closlist[i] = "";
        }
    }
    return(answ)
}


function plusAndMinus(waylist, closlist, length, answ){                       // räknar plus och minus
    for (let i = 0; i < length; i++) { 
        if (waylist[i] == "+"){
            answ = parseFloat(closlist[i]) + parseFloat(closlist[i+1]);
            closlist[i+1] = answ
            waylist[i] = "";
            closlist[i] = "";
            
        }
        if (waylist[i] == "_"){
            answ = parseFloat(closlist[i]) - parseFloat(closlist[i+1]);
            closlist[i+1] = answ
            waylist[i] = "";
            closlist[i] = "";
        }
    }
    return(answ)
}


function toThePowerOf(waylist, closlist, length, answ){                        // räknar upphöjt till  
    for (let i = 0; i < length; i++) { 
        if (waylist[i] == "^"){
            answ = parseFloat(closlist[i]) ** parseFloat(closlist[i+1]);
            closlist[i+1] = answ.toString();
            waylist[i] = "";
            closlist[i] = "";       
        }
    }
    return(answ)
}


function percent(waylist, closlist, length, answ){                // räknar procent
    for (let i = 0; i < length; i++) { 
        if (waylist[i] == "%"){
            answ = parseFloat(closlist[i])/100
            closlist[i+1] = answ.toString();
            waylist[i] = "";
            closlist[i] = "";
            
        }
    }
    return(answ)
}

function unshift(waylist, closlist){                // unshiftar min arrays så paranteser fungerar
    if (waylist[0] == "√"||waylist[0] == "tan"||waylist[0] == "sin"||waylist[0] == "cos"||waylist[0] == "atan"||waylist[0] == "asin"||waylist[0] == "acos"||waylist[0] == "ln"){
        closlist.unshift("");
    }
}