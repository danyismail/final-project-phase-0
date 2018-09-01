var scoreku = 0
var scoreCom = 0
function suwit(param){
    var hasil = Math.round(Math.random() * 2) 
    if (hasil === 0) {
     var computer = "GAJAH"
    } 
    else if(hasil === 1) {
    var computer = "SEMUT" 
    }
    else if (hasil === 2) {
    var computer = "ORANG" 
    }
    //kondisi seri
    if ( (param === "GAJAH" || param === "SEMUT" || param === "ORANG" ) && computer === param) {
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + param 
        + ' kamu ' + '<strong>' + 'SERI' + '</strong>'
    
        //kondisi gajah
    } else if(param === "GAJAH" && computer === "ORANG") { //menang
        scoreku = scoreku + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'ORANG' 
        + ' kamu MENANG' ;
        document.getElementById('scoreKu').innerHTML = scoreku
    } else if (param === "GAJAH" && computer === "SEMUT") {
        scoreCom = scoreCom + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'SEMUT' 
        + ' kamu KALAH' 
        document.getElementById('scoreComp').innerHTML = scoreCom
     
        //kondisi semut
    } else if(param === "SEMUT" && computer === "GAJAH") {
        scoreku = scoreku + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'GAJAH' 
        + ' kamu MENANG'
        document.getElementById('scoreKu').innerHTML = scoreku
    } else if (param === "SEMUT" && computer === "ORANG") {
        scoreCom = scoreCom + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'SEMUT' 
        + ' kamu KALAH'
        document.getElementById('scoreComp').innerHTML = scoreCom
    
        //KONDISI ORANG
    } else if(param === "ORANG" && computer === "SEMUT") {
        scoreku = scoreku + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'SEMUT' 
        + ' kamu MENANG'
        document.getElementById('scoreKu').innerHTML = scoreku
    } else if (param === "ORANG" && computer === "GAJAH") {
        scoreCom = scoreCom + 1
        document.getElementById('score').innerHTML = 'Kamu memilih ' + param + ' dan Computer memilih ' + 'GAJAH' 
        + ' kamu KALAH'
        document.getElementById('scoreComp').innerHTML = scoreCom
    }
}//end of function

suwit()
