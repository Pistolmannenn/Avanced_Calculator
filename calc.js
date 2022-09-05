
let screen = document.getElementById("screen");
let place = document.getElementById("place");
const rek = [];   
const coll = [];  
const clos = []; 
let anser = ""; 
let ans1 = "";  
let way = "";   
let a = 0;    
let svar = ""                           // skapar lite variablar



document.getElementById("num_one").addEventListener('click', num_one);
document.getElementById("num_two").addEventListener('click', num_two);
document.getElementById("num_tre").addEventListener('click', num_tre);
document.getElementById("num_fore").addEventListener('click', num_fore);
document.getElementById("num_five").addEventListener('click', num_five);
document.getElementById("num_six").addEventListener('click', num_six);
document.getElementById("num_seven").addEventListener('click', num_seven);
document.getElementById("num_eight").addEventListener('click', num_eight);
document.getElementById("num_nine").addEventListener('click', num_nine);
document.getElementById("num_zero").addEventListener('click', num_zero);
document.getElementById("tenth").addEventListener('click', tenth);
document.getElementById("negativ").addEventListener('click', negativ1);
document.getElementById("+").addEventListener('click', plus);
document.getElementById("-").addEventListener('click', negativ2);
document.getElementById("*").addEventListener('click', times);
document.getElementById("/").addEventListener('click', devided);
document.getElementById("ans").addEventListener('click', ans);  // lite knappar


function num_one() {   // gör så att nummer hamnar på screenen
    place.append("1")
    rek.push("1")
    console.log(rek)
}
function num_two() {
    place.append("2")
    rek.push("2")
    console.log(rek)
}
function num_tre() {
    place.append("3")
    rek.push("3")
    console.log(rek)
}
function num_fore() {
    place.append("4")
    rek.push("4")
    console.log(rek)
}
function num_five() {
    place.append("5")
    rek.push("5")
    console.log(rek)
}
function num_six() {
    place.append("6")
    rek.push("6")
    console.log(rek)
}
function num_seven() {
    place.append("7")
    rek.push("7")
    console.log(rek)
}
function num_eight() {
    place.append("8")
    rek.push("8")
    console.log(rek)
}
function num_nine() {
    place.append("9")
    rek.push("9")
    console.log(rek)
}
function num_zero() {
    place.append("0")
    rek.push("0")
    console.log(rek)
}
function tenth() {
    place.append(",")
    rek.push(",")
    console.log(rek)
}
function negativ1() {
    place.append("-")
    rek.push("-")
    console.log(rek)
}

function negativ2() {  //gör så att det kommer +, -, * eller / på screenen
    place.append("-")
    rek.push("-")
    console.log(rek)
    way = 2
}
function plus() {
    place.append("+")
    rek.push("+")
    console.log(rek)
    way = 1
}
function times() {
    place.append("*")
    rek.push("*")
    console.log(rek)
    way = 3
}
function devided() {
    place.append("/")
    rek.push("/")
    console.log(rek)
    way = 4
}


function ans() {  //svars funktionen
    anser = rek.join("");
    console.log(anser)
    for (let i = 0; i < rek.length; i++) {
        console.log(i)
        if (rek[i] == "+"|| rek[i] == "-"|| rek[i] == "*"|| rek[i] == "/") {
            ans1 = rek.slice(a,i);
            a = i+1
            clos.push(ans1.join(""))
        }
    }
    rek.push("0")
    ans1 = rek.slice(a,-1);
    clos.push(ans1.join(""))
    place.innerHTML = ""
    if (way == 1){
        svar = parseInt(clos[0]) + parseInt(clos[1])
        console.log(svar)
        place.append(svar)
    }
    else if (way == 2){
        svar = parseInt(clos[0]) - parseInt(clos[1])
        console.log(svar)
        place.append(svar)
    }
    else if (way == 3){
        svar = parseInt(clos[0]) * parseInt(clos[1])
        console.log(svar)
        place.append(svar)
    }
    else if (way == 4){
        svar = parseInt(clos[0]) / parseInt(clos[1])
        console.log(svar)
        place.append(svar)
    } 
    console.log(svar.split(""))
}


