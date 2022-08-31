
let screen = document.getElementById("screen")
let place1 = document.getElementById("place1")
let place2 = document.getElementById("place2")
let way = document.getElementById("way")
let ra = null        // skapar lite variablar


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

console.log(way)
function num_one() {   // gör så att nummer hamnar på screenen
    if (ra == null){
        place1.append("1")
        console.log("test")
    }
    else{
        place2.append("1")
        console.log("hmmmm")
    }
    
}
function num_two() {
    place1.append("2")
}
function num_tre() {
    place1.append("3")
}
function num_fore() {
    place1.append("4")
}
function num_five() {
    place1.append("5")
}
function num_six() {
    place1.append("6")
}
function num_seven() {
    place1.append("7")
}
function num_eight() {
    place1.append("8")
}
function num_nine() {
    place1.append("9")
}
function num_zero() {
    place1.append("0")
}
function tenth() {
    place1.append(",")
}
function negativ1() {
    place1.append("-")
}

function negativ2() {  //gör så att det kommer +, -, * eller / på screenen
    way.append("-")
}
function plus() {
    way.append("+")
}
function times() {
    way.append("*")
}
function devided() {
    way.append("/")
}
function ans() {
    way.append("svar")
}

