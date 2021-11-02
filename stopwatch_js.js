const timer = document.getElementById('stoperica2');

var sat, minuta, sekunda;

sat = 0;
minuta = 0;  
sekunda = 0;
var stopVrijeme = true;

function startTimer () {
    if (stopVrijeme == true) {
        stopVrijeme = false;
        tokVremena ();
    }
}

function stopTimer () {
    if (stopVrijeme == false) {
        stopVrijeme = true;
    }
}

function tokVremena () {
    if (stopVrijeme == false) {
        sekunda = parseInt(sekunda);
        minuta = parseInt(minuta);
        sat = parseInt(sat);

        sekunda = sekunda + 1;

        if (sekunda == 60) {
            minuta = minuta + 1;
            sekunda = 0;
        }

        if (minuta == 60) {
            sat = sat + 1; 
            minuta = 0;
            sekunda = 0;
        }

        if (sekunda < 10 || sekunda == 0) {
            sekunda = '0' + sekunda;
        }

        if (minuta < 10 || minuta == 0) {
            minuta = '0' + minuta;
        }

        if (sat < 10 || sat == 0) {
            sat = '0' + sat;
        }

        timer.innerHTML = sat + ':' + minuta + ':' + sekunda;

        setTimeout("tokVremena()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';

    stopVrijeme = true;
    sat = 0;
    minuta = 0;
    sekunda = 0;
}

function stopTimer () {
    if (stopVrijeme == true) {
        sekunda = parseInt(sekunda);
        minuta = parseInt(minuta);
        sat = parseInt(sat);
        
    }
}
