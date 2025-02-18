var isStart = false;
var isPause = false;
var minutes, seconds;
minutes = 1;
seconds = 5;
function runTimer() {
    var totalSeconds = minutes * 60 + seconds;
    if(totalSeconds == 0) {
        alert("Take a Break");
    }
    if(totalSeconds > 0 && isStart && !isPause) {
        totalSeconds--;
    }
    if(totalSeconds <=60) {
        document.getElementById("time").style.color = "red";
        document.getElementById("time").style.backgroundColor = "black";
        document.getElementById("time").style.borderRadius = "5px";
    } else {
        document.getElementById("time").style.color = "black";
        document.getElementById("time").style.backgroundColor = "white";
        document.getElementById("time").style.borderRadius = "20px";
    }
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    paddedSecs = String(seconds).padStart(2, '0');          //https://codedamn.com/news/javascript/how-to-add-leading-zero-to-a-number-in-javascript
    paddedMins = String(minutes).padStart(2, '0');
    document.getElementById("time").innerHTML = paddedMins + " : " + paddedSecs;
}
function startButton() {
    isStart = true;   
}
function pauseButton() {
    if(isPause) {
        isPause = false;
        document.getElementById("pauseButton").innerHTML = "Pause";
    } else {
        isPause = true;
        document.getElementById("pauseButton").innerHTML = "Resume";
    }
}
function stopButton() {
    isStart = false;
    if(isPause) pauseButton();
    minutes = 25;
    seconds = 0;
}
setInterval(runTimer, 1000);
