
document.getElementById("yequl").addEventListener('click', y); 

const graflist = [];
let testlist = "";
const xValues = [];
const yValues = [];





function y() { 
    
    place.append("y = (")
    rek.push("y")
    rek.push("(")
}


function grafs(){
    graflist.push(answer)
    testlist = graflist.join("")
    console.log(testlist)
    rek.length = 0;
    place.innerHTML = rek
    generategraf(testlist, 0, 10, 1)
    new Chart("graf", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                pointRadius: 0,
                borderColor: "rgba(0,0,255,0.5)",
                data: yValues
              }]
        },
        options: {
            legend: {display: false},
        }
      });
}

function generategraf(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
        //console.log("hello " + yValues)
        //console.log("bye " + xValues)
    }
  }
