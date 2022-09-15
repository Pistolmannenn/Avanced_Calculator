
document.getElementById("yequl").addEventListener('click', y);  //gör så att y= knapen funkar

let truegraflist = "";          // innehåler strängen som grafen använder
let garfAnswer = 0;            // håller kol på om anser ska lägas in i graf listan 
const graflist = [];          // håller kol på vad det är som ska med i grafen
const xValues = [];          // håller alla x värden till garfen
const yValues = [];         // håller alla y värden till garfen





function y() {                  
    place.append("y = ")
    rek.push("y")
}


function grafs(){               //skriver ut grafer
    if(garfAnswer == 0){
        graflist.push(answer)
    }
    truegraflist = graflist.join("")                //säter ihop arrayen till en string
    rek.length = 0;
    place.innerHTML = rek                            //rensar kärmen
    generategraf(truegraflist, 0, 10, 0.5)          //skapar grafen
    new Chart("graf", {
        type: "line",                               //gör så det är en linje graf
        data: {
            labels: xValues,                        //läger in x värderna
            datasets: [{
                fill: false,                               //gör så dte inte fins någon ritad yta imelan garfen och x axeln
                pointRadius: 0,                           //tar bort alla punkter ifrån grafen
                borderColor: "rgba(0,0,255,0.5)",        //bestämer färj på linjen
                data: yValues                           //läger in y värderna
              }]
        },
        options: {
            legend: {display: false},                   // gör så det inte finns någon titel till garfen
        }
      });
      graflist.length = 0                   //reset
      garfAnswer = 0
      truegraflist = ""
}

function generategraf(value, i1, i2, step = 1) {            //kalkuler alla x och y värden till grafen
    for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
    }
  }
