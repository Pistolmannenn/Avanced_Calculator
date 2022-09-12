
let place = document.getElementById("place");
const rek = [];  //dena arrayen innehåler hella ekvationen   
const clos = [];  //dena arrrayen innehåler alla nummer ifrån ekvationen
const way = [];   //dena arrrayen innehåler alla "sät" som matten händer på ifrån ekvationen
const clospar = [];  //dena arrrayen innehåler alla nummer ifrån ekvationens paranteser
const waypar = [];  //dena arrrayen innehåler alla "sät" som matten händer på ifrån ekvationen paranteser
let ans = "";    
let slice = 0;    
let answer = "";   
let wayLength = 0; 
let parLength = 0;
let parCol = 0;               //dena ser till att allt inom paranteserna kommer med
let parAnswer = "";          //dena inhäller svar ifrån paranteserna                            


document.getElementById("num_one").addEventListener('click', function(){button("1")});
document.getElementById("num_two").addEventListener('click', function(){button("2")});
document.getElementById("num_tre").addEventListener('click', function(){button("3")});
document.getElementById("num_fore").addEventListener('click', function(){button("4")});
document.getElementById("num_five").addEventListener('click', function(){button("5")});
document.getElementById("num_six").addEventListener('click', function(){button("6")});
document.getElementById("num_seven").addEventListener('click', function(){button("7")});
document.getElementById("num_eight").addEventListener('click', function(){button("8")});
document.getElementById("num_nine").addEventListener('click', function(){button("9")});
document.getElementById("num_zero").addEventListener('click', function(){button("0")});
document.getElementById("tenth").addEventListener('click', function(){button(".")});
document.getElementById("negativ").addEventListener('click', function(){button("-")});
document.getElementById("+").addEventListener('click', function(){button("+")});
document.getElementById("-").addEventListener('click', negativ);
document.getElementById("*").addEventListener('click', function(){button("*")});
document.getElementById("/").addEventListener('click', function(){button("/")});
document.getElementById("parleft").addEventListener('click', function(){button("(")}); 
document.getElementById("parright").addEventListener('click', function(){button(")")});
document.getElementById("**").addEventListener('click', function(){button("^")}); 
document.getElementById("sqrt").addEventListener('click', function(){button("√")}); 
document.getElementById("pi").addEventListener('click', function(){button("π")});
document.getElementById("e").addEventListener('click', function(){button("e")});
document.getElementById("tan").addEventListener('click', function(){button("tan")});
document.getElementById("sin").addEventListener('click', function(){button("sin")});
document.getElementById("cos").addEventListener('click', function(){button("cos")}); 
document.getElementById("arktan").addEventListener('click', function(){button("arktan")});
document.getElementById("arksin").addEventListener('click', function(){button("arksin")}); 
document.getElementById("arkcos").addEventListener('click', function(){button("arkcos")});// några knappar
document.getElementById("ans").addEventListener('click', anse);
document.getElementById("clear").addEventListener('click', clear); 
document.getElementById("back").addEventListener('click', back); 



function button(num) {   // gör så att nummer hamnar på skärmen och i en array
    place.append(num)
    rek.push(num)
    if (num == "√"||num == "tan"||num == "sin"||num == "cos"||num == "arktan"||num == "arksin"||num == "arkcos"){
        place.append("(")
        rek.push("(")
    }
    console.log(rek)
}
function negativ() {   // dena hanterar minus så det går att få tag på negativa nummer
    place.append("-")
    rek.push("_")
    console.log(rek)
}

function clear() {
    rek.length = 0;
    place.innerHTML = rek
    
}
function back() {
    rek.pop();
    place.innerHTML = rek.join("");
    
}


function anse() {  //svars funktionen



    for (let i = 0; i < rek.length; i++) {
        if (rek[i] == "+"|| rek[i] == "_"|| rek[i] == "*"|| rek[i] == "/"|| rek[i] == ")"|| rek[i] == "^") { //fyller mina arrays way och clos med info om ekvationen
            ans = rek.slice(slice,i);
            slice = i+1
            clos.push(ans.join(""))
            way.push(rek[i])
        }
        if (rek[i] == "("|| rek[i] == "√"|| rek[i] == "tan"|| rek[i] == "sin"|| rek[i] == "cos"|| rek[i] == "arktan"|| rek[i] == "arksin"|| rek[i] == "arkcos") {
            slice = i+1
            way.push(rek[i])
        }
        if (rek[i] == "π") { //fyller mina arrays way och clos med info om ekvationen
            clos.push(Math.PI)
            slice = i+1
        }
        if (rek[i] == "e") { //fyller mina arrays way och clos med info om ekvationen
            clos.push(Math.E)
            slice = i+1
        }
    }
    
    rek.push("")
    ans = rek.slice(slice,-1);      //gör så att slutet av clos blir koräkt
    clos.push(ans.join(""))


    console.log("test1 " + clos)
    console.log("hmmmm1 " + way)
    for (let i = 0; i < way.length; i++) { // gör så att allt som ska hamna i paranteserna hamnar inom paranteserna
        if (way[i] == ")"){
            way[i] = "";
            parCol = 0;
            parcalc()  
            console.log("parsvar "+ parAnswer)
            clos[i-parLength] = parAnswer.toString();
        }
        if (parCol == 1){                   //ser till att allt inom paranteserna kommer med
            clospar.push(clos[i]);
            waypar.push(way[i]);
            way[i] = "";
            clos[i] = "";
            parLength ++;
        }
        if (way[i] == "("){
            clospar.push(clos[i]);
            clos[i] = "";
            way[i] = "";
            parCol = 1;
            parLength ++;
        }  
        if (way[i] == "√"||way[i] == "tan"||way[i] == "sin"||way[i] == "cos"||way[i] == "arktan"||way[i] == "arksin"||way[i] == "arkcos"){                 //gör så att roten ur kommer med 
            clospar.push(clos[i]);
            waypar.push(way[i]);
            clos[i] = "";
            way[i] = "";
            clospar.unshift("");
        }
    }
    console.log("test2 " + clos)
    console.log("hmmmm2 " + way)

    wayLength = way.length
    fixlist(way, clos, wayLength)
    
    console.log("test3 " + clos)
    console.log("hmmmm3 " + way)

    if (way.length == 0){ // om det bara står nummer
        answer = clos[0]
    }

    wayLength = way.length
    answer = toThePowerOf(way, clos, wayLength, answer)             //räknar upphöjt till
    
    console.log("test4 " + clos)
    console.log("hmmmm4 " + way)
    
    wayLength = way.length
    fixlist(way, clos, wayLength)                   //fixar listorna way och clos

    console.log("test5 " + clos)
    console.log("hmmmm5 " + way)

    wayLength = way.length
    answer = timesAndDevided(way, clos, wayLength, answer)           //räknar diviton och gånger

    console.log("test6 " + clos)
    console.log("hmmmm6 " + way)

    wayLength = way.length
    fixlist(way, clos, wayLength)                   //fixar listorna way och clos

    console.log("test7 " + clos)
    console.log("hmmmm7 " + way)

    wayLength = way.length
    answer = plusAndMinus(way, clos, wayLength, answer)              //räknar plus och minus

    console.log("test8 " + clos)
    console.log("hmmmm8 " + way)

    place.innerHTML = ""                            //skriver utt svaret och resetar 
    place.append(answer)
    way.length = 0
    rek.length = 0;
    clos.length = 0;
    parLength = 0;
    slice = 0;
    rek.push(answer.toString())
}

function parcalc() {                            // innehåller alla räkesät för paranteser
    wayLength = waypar.length
    parAnswer = toThePowerOf(waypar, clospar, wayLength, parAnswer)               //räknar upphöjt till för paranteser
    
    wayLength = waypar.length
    fixlist(waypar, clospar, wayLength) // fixar listorna waypar och clospar


    if (waypar[0] == "√"||waypar[0] == "tan"||waypar[0] == "sin"||waypar[0] == "cos"||waypar[0] == "arktan"||waypar[0] == "arksin"||waypar[0] == "arkcos"){
        clospar.unshift("");
    }

    wayLength = waypar.length
    parAnswer = timesAndDevided(waypar, clospar, wayLength, parAnswer)           //räknar diviton och gånger för parantser

    wayLength = waypar.length
    fixlist(waypar, clospar, wayLength) // fixar listorna waypar och clospar


    if (waypar[0] == "√"||waypar[0] == "tan"||waypar[0] == "sin"||waypar[0] == "cos"||waypar[0] == "arktan"||waypar[0] == "arksin"||waypar[0] == "arkcos"){
        clospar.unshift("");
    }

    console.log("test co1 " + clospar)
    console.log("test way1 " + waypar)
    wayLength = waypar.length
    parAnswer = plusAndMinus(waypar, clospar, wayLength, parAnswer)              //räknar plus och minus för parantser


    wayLength = waypar.length
    fixlist(waypar, clospar, wayLength) // fixar listorna waypar och clospar


    console.log("test co2 " + clospar)
    console.log("test way2 " + waypar)

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
        if (waypar[i] == "arktan"){
            parAnswer = Math.atan(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "arksin"){
            parAnswer = Math.asin(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "arkcos"){
            parAnswer = Math.acos(parseFloat(clospar[i]));
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
    }
    
    waypar.length = 0
    clospar.length = 0;
}

function fixlist(waylist, closlist, length){                        // tar bort allt tommrum ifrån mina arryas
    for (let i = 0; i < length; i++){ 
        if (waylist[i] == ""){ 
            if (i == 0){ 
                waylist.shift() 
                i -= 1;
            }
            else{
                waylist.splice(i, i) 
                i -= 1;
            }
        }
        if (closlist[i] == ""){
            if (i == 0){ 
                closlist.shift() 
                i -= 1;
            }
            else{
                closlist.splice(i, i) 
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

