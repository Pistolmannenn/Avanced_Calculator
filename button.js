
let place = document.getElementById("place");
let graf = document.getElementById("graf");

const rek = [];              //dena arrayen innehåler hella ekvationen   
const clos = [];            //dena arrayen innehåler alla nummer ifrån ekvationen
const way = [];            //dena arrayen innehåler alla "sät" som matten händer på ifrån ekvationen
const clospar = [];       //dena arrayen innehåler alla nummer ifrån ekvationens paranteser
const waypar = [];       //dena arrayen innehåler alla "sät" som matten händer på ifrån ekvationen paranteser
let ans = "";           //gör så att nummerna hamnar i clos
let slice = 0;    
let answer = "";   
let wayLength = 0; 
let parLength = 0;             // gör så att parantes svar hamnar på rät plats i clos
let parCol = 0;               //dena ser till att allt inom paranteserna kommer med
let parAnswer = "";          //dena innhåller svaret ifrån paranteserna                            


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
document.getElementById("dot").addEventListener('click', function(){button(".")});
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
document.getElementById("arktan").addEventListener('click', function(){button("atan")});
document.getElementById("arksin").addEventListener('click', function(){button("asin")}); 
document.getElementById("arkcos").addEventListener('click', function(){button("acos")});      
document.getElementById("ln").addEventListener('click', function(){button("ln")});   
document.getElementById("log").addEventListener('click', function(){button("log")});   
document.getElementById("pro").addEventListener('click', function(){button("%")}); 
document.getElementById("x").addEventListener('click', function(){button("x")});            // gör så mina knappar fungerar
document.getElementById("clear").addEventListener('click', clear); 
document.getElementById("back").addEventListener('click', back); 



function button(num) {   // gör så att nummer hamnar på skärmen och i rek
    place.append(num)
    rek.push(num)
    if (num == "√"||num == "tan"||num == "sin"||num == "cos"||num == "atan"||num == "asin"||num == "acos"||num == "ln"||num == "log"){
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

function clear() {     // gör så att skärmen töms
    rek.length = 0;
    graf.innerHTML = rek
    place.innerHTML = rek
    
}
function back() {    //tillåter en att backa
    rek.pop();
    place.innerHTML = rek.join("");
    
}




