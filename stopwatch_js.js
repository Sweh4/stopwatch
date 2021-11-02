window.onload = function () {

var sekunde, minute, iSekunde, iMinute, start_b, stop_b, restart_b;

sekunde = 00;
minute = 00;

iSekunde = document.getElementById("sekunde");
iMinute = document.getElementById("minute");

start_b = document.getElementById('start_b');
stop_b = document.getElementById('stop_b');
restart_b = document.getElementById('restart_b');

var interval;

    start_b.onclick = function () {
        interval = setInterval(startTimer, 10);
    }

    stop_b.onclick = function () {
        interval = setInterval(interval);
    }

    restart_b.onclick = function () {
        clearInterval(interval);
            sekunde = "00";
            minute = "00";
            iSekunde.innerHtml = sekunde;
            iMinute.innerHtml = minute;
    }

    function startStoperica () {
        minute ++;

        if (minute <= 9) {
            iMinute.innerHtml = "0" + minute;
        }

        if (minute > 9) {
            iMinute.innerHtml = minute;
        }

        if (minute > 99) {
            console.log("sekunde");

            sekunde ++;
            iSekunde.innerHtml = "0" + sekunde;
            minute = 0;
        }

        if (sekunde > 9) {
            iSekunde.innerHtml = sekunde;
        }
    }
}