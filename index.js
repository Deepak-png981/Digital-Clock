//creating a function to make it refresh its content in every 1000ms
function ghadiDigitalWali(){
//calling a method Date to get the date set in the system
var date = new Date();
//from date we are calling a method getHours() to get the present hour
var hour = date.getHours();
//from date we are calling a method getMinutes() to get the present minute
var min = date.getMinutes();
//from date we are calling a method getSeconds() to get the present seconds
var sec = date.getSeconds();
//for AM and PM
var session  = "AM";

//if the time is 12PM then it will be showing 00 so I just want to change it
hour = (hour == 0)? 12 : hour;

//  to make it a 12 hour clock
if(hour > 12){
    hour = hour - 12;
    session = "PM";
}

//time in the watch is showing in single digit so to make it look like 01 02 03 
hour = (hour < 10) ? "0"+hour : hour;

//same for minutes and seconds
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;


//to change the innerHTML of the div having id digitalClock
document.getElementById("digitalClock").innerHTML = hour + ":" + min + ":" + sec + " " + session;

    //to call the function after every 1sec
    setTimeout(ghadiDigitalWali , 1000);
}

//calling the ghadiDigitalWali function initially
ghadiDigitalWali();