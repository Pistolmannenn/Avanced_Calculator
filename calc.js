
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
let parCol = 0               //dena ser till att allt inom paranteserna kommer med
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
document.getElementById("tenth").addEventListener('click', function(){button(",")});
document.getElementById("negativ").addEventListener('click', function(){button("-")});
document.getElementById("+").addEventListener('click', function(){button("+")});
document.getElementById("-").addEventListener('click', function(){button("-")});
document.getElementById("*").addEventListener('click', function(){button("*")});
document.getElementById("/").addEventListener('click', function(){button("/")});
document.getElementById("parleft").addEventListener('click', function(){button("(")}); 
document.getElementById("parright").addEventListener('click', function(){button(")")}); // några knappar
document.getElementById("ans").addEventListener('click', anse);
document.getElementById("clear").addEventListener('click', clear); 
document.getElementById("back").addEventListener('click', back); 



function button(num) {   // gör så att nummer hamnar på skärmen och i en array
    place.append(num)
    rek.push(num)
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
        if (rek[i] == "+"|| rek[i] == "-"|| rek[i] == "*"|| rek[i] == "/") { //fyller mina arrays way och clos med info om ekvationen
            ans = rek.slice(slice,i);
            slice = i+1
            clos.push(ans.join(""))
            way.push(rek[i])
        }
        if (rek[i] == "("|| rek[i] == ")") {
            slice = i+1
            way.push(rek[i])
        }
    }
    
    rek.push("0")
    if (rek[slice-1] == ")") {  //gör så att slutet av clos blir koräkt
        ans = rek.slice(slice-2,-2);
        clos.push(ans.join(""))
    }
    else{
        ans = rek.slice(slice,-1);
        clos.push(ans.join(""))
    }

    console.log("test " + clos)
    console.log("hmmmm " + way)
    for (let i = 0; i < way.length; i++) { // gör så att allt som ska hamna i paranteserna hamnar inom paranteserna
        if (way[i] == ")"){
            way[i] = "";
            parCol = 0;
            parcalc()  
            clos[i-1] = parAnswer.toString();
        }
        if (parCol == 1){
            clospar.push(clos[i]);
            waypar.push(way[i]);
            way[i] = "";
            clos[i] = "";
        }
        if (way[i] == "("){
            clospar.push(clos[i]);
            clos[i] = "";
            way[i] = "";
            parCol = 1;
        }  
    }
    
    wayLength = way.length
    for (let i = 0; i < wayLength; i++){ // fixar listorna way och clos
        if (way[i] == ""){ 
            way.splice(i, i) 
            i -= 1;
        }
        if (clos[i] == ""){
            clos.splice(i, i) 
            i -= 1;
        }
    }
    console.log("test " + clos)
    console.log("hmmmm " + way)

    if (way.length == 0){ // om det bara står nummer
        answer = clos[0]
    }
    for (let i = 0; i < way.length; i++) { // räknar gånger och divition
        if (way[i] == "*"){
            answer = parseInt(clos[i]) * parseInt(clos[i+1]);
            clos[i+1] = answer.toString();
            way[i] = "";
            clos[i] = "";       
        }
        if (way[i] == "/"){
            answer = parseInt(clos[i]) / parseInt(clos[i+1]);
            clos[i+1] = answer.toString();
            way[i] = "";
            clos[i] = "";
        }
    }

    console.log("test " + clos)
    console.log("hmmmm " + way)
    wayLength = way.length
    for (let i = 0; i < wayLength; i++){ // fixar listorna way och clos igen
        if (way[i] == ""){
            clos.splice(i, i+1) 
            way.splice(i, i+1) 
            i -= 1;
        }
    }
    

    console.log("test " + clos)
    console.log("hmmmm " + way)

    for (let i = 0; i < way.length; i++) { // räknar plus och minus
        if (way[i] == "+"){
            answer = parseInt(clos[i]) + parseInt(clos[i+1]);
            clos[i+1] = answer
            way[i] = "";
            clos[i] = "";
            
        }
        if (way[i] == "-"){
            answer = parseInt(clos[i]) - parseInt(clos[i+1]);
            clos[i+1] = answer
            way[i] = "";
            clos[i] = "";
        }
    }
    console.log("test " + clos)
    console.log("hmmmm " + way)
    place.innerHTML = ""  //skriver utt svaret och resetar 
    place.append(answer)
    way.length = 0
    rek.length = 0;
    clos.length = 0;
    slice = 0;
    rek.push(answer.toString())
}

function parcalc() {                            // innehåller alla räkesät för paranteser
    for (let i = 0; i < waypar.length; i++) { // räknar gånger och divition för paranteser
        if (waypar[i] == "*"){
            parAnswer = parseInt(clospar[i]) * parseInt(clospar[i+1]);
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "/"){
            parAnswer = parseInt(clospar[i]) / parseInt(clospar[i+1]);
            clospar[i+1] = parAnswer.toString();
            waypar[i] = "";
            clospar[i] = "";
        }
    }
    wayLength = waypar.length
    for (let i = 0; i < wayLength; i++){ // fixar listorna waypar och clospar
        if (waypar[i] == ""){
            clospar.splice(i, i) 
            waypar.splice(i, i) 
            i -= 1;
        }
    }
    console.log("test co " + clospar)
    console.log("test way " + waypar)
    for (let i = 0; i < waypar.length; i++) { // räknar plus och minus för paranteser
        if (waypar[i] == "+"){
            parAnswer = parseInt(clospar[i]) + parseInt(clospar[i+1]);
            clospar[i+1] = parAnswer
            waypar[i] = "";
            clospar[i] = "";
            
        }
        if (waypar[i] == "-"){
            parAnswer = parseInt(clospar[i]) - parseInt(clospar[i+1]);
            clospar[i+1] = parAnswer
            waypar[i] = "";
            clospar[i] = "";
        }
    }
    waypar.length = 0
    clospar.length = 0;
}
