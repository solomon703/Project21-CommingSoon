// ! Upcomming date
var countDownDate = new Date("July 24, 2024 00:00:00").getTime();
// ! function x
var x = setInterval(function(){
  // ! Today date
  var now = new Date().getTime();
  // ! removing upcomming date from today date.
  var distance  = countDownDate - now;
  // ! calculation part
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // ! To display 
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML =minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // ! To clear after the day comes.
  if(distance < 0){
    clearInterval(x);
    // ! To set everything to 00:00
    document.getElementById("days").innerHTML ="00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML ="00";
    document.getElementById("seconds").innerHTML = "00";
    }
},1000);

function thanks(){
  alert("Thanks for your Waiting");
}