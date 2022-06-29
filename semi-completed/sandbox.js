var startButton = document.getElementById("start-btn");
var buttonStatus = true;
var defaultValue ="0:10";
var titleIcon = document.getElementById("titleIcon");
var switchShort = document.getElementById("switchShort")
var switchLong = document.getElementById("switchLong")

switchShort.onclick = function(event){
    var confirmStatus = confirm("Press a button!");
    console.log("confirmStatus value ",confirmStatus)

    if (confirmStatus == false ){
        console.log("I'm not switching")
        event.preventDefault();
    } else{
        console.log("I'm switching!!")
    }
}


startButton.onclick = function(){
        if (buttonStatus == true) {
            updateIcon()
            buttonStatus = false;
            startButton.innerHTML = "STOP"
            myInterval = setInterval(myTimer, 1000)
        } else {
            updateIcon()
            buttonStatus = true;
            startButton.innerHTML = "START"
            myStopFunction()
        }
}

function myStopFunction(){
    console.log('Timer paused')
    clearInterval(myInterval)
}

function myTimer(){
//    Get current HTML value
    var currentValue = document.getElementById("timestring").innerHTML
    console.log("currentvalue",currentValue)
    var a = currentValue.split(':')
    console.log("values of a ",a)

    // convert strings into integers

    var seconds = parseInt(a[0])*60 + parseInt(a[1])
    var d = seconds - 1
    console.log('seconds value', d)

    // convert seconds back to minutes and seconds
    var m = Math.floor (d % 3600 / 60)
    var s = Math.floor (d % 3600 % 60)

    // Add padding to the string to make sure it is 2 digits
    s = String(s).padStart(2,'0')

    var updatedTime = m + ":" + s

    document.getElementById("timestring").innerHTML = updatedTime
    document.getElementById("titleDetails").innerHTML = `${updatedTime} - Time to Focus!`

    if (updatedTime == "0:00"){
        // play audio sound when timer hits 0:00
        var snd = new Audio('./mixkit-classic-alarm-995.wav')
        snd.play();
        myStopFunction()

        // reset values back to default
        document.getElementById("timestring").innerHTML = defaultValue
        startButton.innerHTML = "START"
    }
}

function updateIcon(){
    if(buttonStatus == true){
        titleIcon.setAttribute("href","https://cdn-icons-png.flaticon.com/512/877/877763.png")
    } else {
        titleIcon.setAttribute("href","https://cdn-icons-png.flaticon.com/512/877/877712.png")
    }
    

}
// Use interval function to do clock countdown
// Store the minutes and seconds into array
// Convert into seconds and decrement

// Alert the user when reaches 0
// Stop the timer
