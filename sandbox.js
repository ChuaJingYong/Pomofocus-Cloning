// Initialize variable myInterval and startButton
var myInterval;
var startButton = document.getElementById("startbutton")

startButton.onclick = function(){
    var timerValue = document.getElementById("timestring")
    console.log("startButton value", timerValue.innerHTML)
    //run this thang every 1 seconds
    myInterval = setInterval(myTimer, 1000);
}

var stopButton = document.getElementById("stopbutton")
stopButton.addEventListener("click",myStopFunction)
// stopButton.onclick = function(){myStopFunction};

function myStopFunction() {
    console.log("Timer paused")
    clearInterval(myInterval);
  }

function myTimer(){
        // Get current HTML value
        var currentValue = document.getElementById("timestring").innerHTML; 
        var a = currentValue.split(':'); // split it at the colons
        console.log("value of a",a)

        // convert string minutes and seconds in array into integers to be added.
        var seconds = ((parseInt(a[0]) * 60)) +  parseInt(a[1]); 
        console.log("seconsd values:", seconds);

        // decrease by 1 second everytime
        var d = seconds - 1

        // convert seconds back to minutes and seconds
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        // Add padding to the string seconds to make sure it's two digits
        s = String(s).padStart(2,'0')

        // Recombine back string minutes and seconds, then display
        var updatedTime = m + ":" + s;
        console.log("updateTime value is ",updatedTime)
        document.getElementById("timestring").innerHTML = updatedTime;

        if (updatedTime == "0:00"){
            // play audio sound when timer hits 0:00
            var snd = new Audio('/mixkit-classic-alarm-995.wav');
            snd.play();
            myStopFunction();

            // reset back clock default value
            document.getElementById("timestring").innerHTML = "0:05";
            
            // alert("Time to take a break!");
        }
}
  



// Grab the current value
// Change string to time
// Reduce time by 1
// Update to current value
