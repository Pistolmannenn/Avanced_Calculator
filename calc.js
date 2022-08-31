
let screen = document.getElementById("screen")
let place1 = document.getElementById("place1")
let place2 = document.getElementById("place2")
let way = document.getElementById("way")


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
document.getElementById("ans").addEventListener('click', ans);

if (way == null){
    function num_one() {
        console.log("1");
        place1.append("1")
    }
    function num_two() {
        console.log("2");
        place1.append("2")
    }
    function num_tre() {
        console.log("3");
        place1.append("3")
    }
    function num_fore() {
        console.log("4");
        place1.append("4")
    }
    function num_five() {
        console.log("5");
        place1.append("5")
    }
    function num_six() {
        console.log("6");
        place1.append("6")
    }
    function num_seven() {
        console.log("7");
        place1.append("7")
    }
    function num_eight() {
        console.log("8");
        place1.append("8")
    }
    function num_nine() {
        console.log("9");
        place1.append("9")
    }
    function num_zero() {
        console.log("0");
        place1.append("0")
    }
    function tenth() {
        place1.append(",")
    }
    function negativ1() {
        splace1.append("-")
    }
}

function negativ2() {
    console.log("-");
    way.append("-")
}
function plus() {
    console.log("+");
    way.append("+")
}
function times() {
    console.log("*");
    way.append("*")
}
function devided() {
    console.log("/");
    way.append("/")
}
function ans() {
    console.log("svar");
    way.append("svar")
}

