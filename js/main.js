const countdown = document.querySelector('.countdown');

//Set launch date

const launchDate = new Date('April 11, 2022 11:00:00').getTime();

//update every second
const intvl = setInterval(()=>{
//Get todays date and time in ms
const now = new Date().getTime();

//Distance from now to launch
const distance = launchDate - now;

//Time calculations
const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const mins = Math.floor((distance % (1000*60*60))/(1000*60));
const seconds = Math.floor((distance % (1000*60))/1000);

//Display the result
countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

//If launch date passed
if(distance<0){
    //Stop countdown
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched'
}
},1000);