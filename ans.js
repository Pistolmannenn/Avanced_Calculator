
document.getElementById("ans").addEventListener('click', anse);
let key = 0;
function anse() {  //svars funktionen



    for (let i = 0; i < rek.length; i++) {
        if (rek[i] == "+"||rek[i] == "_"||rek[i] == "*"||rek[i] == "/"||rek[i] == ")"||rek[i] == "^"||rek[i] == "%") { //fyller mina arrays way och clos med info om ekvationen
            ans = rek.slice(slice,i);
            slice = i+1
            clos.push(ans.join(""))
            way.push(rek[i])
        }
        if (rek[i] == "("||rek[i] == "√"||rek[i] == "tan"||rek[i] == "sin"||rek[i] == "cos"||rek[i] == "atan"||rek[i] == "asin"||rek[i] == "acos"||rek[i] == "ln"||rek[i] == "log") {
            slice = i+1
            way.push(rek[i])
        }
        if (rek[i] == "y") {
            slice = i+1
        }
        if (rek[i] == "π") {                    // gör så att pi, e och x fungerar 
            clos.push(Math.PI)
            slice = i+1
        }
        if (rek[i] == "e") { 
            clos.push(Math.E)
            slice = i+1
        }
        if (rek[i] == "x") { 
            clos.push("x")
            slice = i+1
        }
    }


    rek.push("")
    ans = rek.slice(slice,-1);      //gör så att slutet av clos blir koräkt
    clos.push(ans.join(""))


    console.log("test0 " + clos)
    console.log("hmmmm0 " + way)


    if (rek[0] == "y"){                 // gör så att ekvationen till grafar får med sig allt i koräkt årning
        for (let i = 0; i < way.length; i++){
            if (clos[i] == "x"){                           
                if (way[i] == "tan"||way[i] == "sin"||way[i] == "cos"||way[i] == "atan"||way[i] == "asin"||way[i] == "acos"){
                    garfAnswer = 1
                    graflist.push("Math."+way[i])
                    graflist.push("(")
                    graflist.push("x")
                    way[i] = ""
                    way[i+1] = ""
                }
                else if (way[i] == "^"){
                    graflist.push("x")
                    graflist.push("**")
                    way[i] = ""
                }
                else if (way[i] == "√"){
                    graflist.push("Math.sqrt")
                    graflist.push("(")
                    graflist.push("x")
                    way[i] = ""
                    way[i+1] = ""
                }
                else if (way[i] == "_"){
                     if (i == 0){
                        graflist.push("x")
                        graflist.push("-")
                    }
                    else{
                        graflist.push("-")
                        graflist.push("x")
                    }
                    way[i] = ""
                }
                else if (i == 0){
                    graflist.push("x"+way[i])
                    way[i] = ""
                }
                else{
                    graflist.push(way[i]+"x")
                    way[i] = ""
                }
                clos[i] = ""
                
            }
            else if (way[i] == ")"){
                graflist.push(way[i])
                way[i] = ""
            }
            else if (way[i] == "^"){
                graflist.push("**")
                graflist.push(clos[i])
                way[i] = ""
                clos[i] = ""
            }
            else if (way[i] == "√"){
                graflist.push("Math.sqrt")
                graflist.push("(")
                graflist.push(clos[i])
                way[i] = ""
                way[i+1] = ""
                clos[i] = ""
            }
            else if (way[i] == "_"){
                graflist.push(clos[i])
                graflist.push("-")
                way[i] = ""
                clos[i] = ""
            }
            else if (i == 0){
                graflist.push(clos[i])
                graflist.push(way[i])
                way[i] = ""
                clos[i] = ""
            }
            else if (way[i] != ""){
                graflist.push(way[i])
                graflist.push(clos[i])
                way[i] = ""
                clos[i] = ""
            }
    
        }
    }
    

    wayLength = way.length
    fixlist(way, clos, wayLength)       //fixar listorna way och clos
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
        if (way[i] == "√"||way[i] == "tan"||way[i] == "sin"||way[i] == "cos"||way[i] == "atan"||way[i] == "asin"||way[i] == "acos"||way[i] == "ln"||rek[i] == "log"){          
            clospar.push(clos[i]);                  //gör så att roten ur, log och trigenometrin kommer med koräkt 
            waypar.push(way[i]);
            clos[i] = "";
            way[i] = "";
        }
    }
    console.log("test2 " + clos)
    console.log("hmmmm2 " + way)

    wayLength = way.length
    fixlist(way, clos, wayLength)
    
    console.log("test3 " + clos)
    console.log("hmmmm3 " + way)

    if (way.length == 0){                           // om det bara står nummer
        answer = clos[0]
    }

    wayLength = waypar.length
    answer = percent(way, clos, wayLength, answer)          //räknar procent


    fixlist(way, clos, wayLength)                   

    wayLength = way.length
    answer = toThePowerOf(way, clos, wayLength, answer)             //räknar upphöjt till
    
    console.log("test4 " + clos)
    console.log("hmmmm4 " + way)
    

    fixlist(way, clos, wayLength)                   

    console.log("test5 " + clos)
    console.log("hmmmm5 " + way)


    wayLength = way.length
    answer = timesAndDevided(way, clos, wayLength, answer)           //räknar diviton och gånger

    console.log("test6 " + clos)
    console.log("hmmmm6 " + way)


    fixlist(way, clos, wayLength)                   

    console.log("test7 " + clos)
    console.log("hmmmm7 " + way)

    wayLength = way.length
    answer = plusAndMinus(way, clos, wayLength, answer)              //räknar plus och minus

    console.log("test8 " + clos)
    console.log("hmmmm8 " + way)

    place.innerHTML = ""                            //skriver utt svaret på skärmen
    place.append(answer)

    if (rek[0] == "y"){                 // räknar grafer och ser till att det inte sparas ekvatoner till garfen fel
        grafs()
        key = 1
    }
    console.log("answer "+ answer)
    
    way.length = 0          //resetar
    rek.length = 0;
    clos.length = 0;
    parLength = 0;
    slice = 0;
    if (key == 0){
        rek.push(answer.toString())
    }
    key = 0
    
    
}