const hourCircle = document.querySelector('[data-hours]');
const minuteCircle = document.querySelector('[data-minutes]');
const secondCircle = document.querySelector('[data-seconds]');
const clockTime = document.querySelector('.clock-time');

let date = new Date();
let hours = date.getHours()%13;

let minutes = date.getMinutes();
let seconds = date.getSeconds();

setHour();
setMinutes();
setSeconds();

setInterval(()=>{
    date = new Date();
    if (hours !== date.getHours()) {
        hours = date.getHours();
        setHour();
        setClock();

    }
    if (minutes !== date.getMinutes()) {
        minutes = date.getMinutes();
        setMinutes();
        setClock();

    }
    if (seconds !== date.getSeconds()) {
        seconds = date.getSeconds();
        setSeconds();
        setClock();
    }
  

},500);
function setHour() {
    let position = (30*hours) ;
    hourCircle.style.setProperty('--rotate' , position + "deg");    
    
}
function setMinutes() {
    let position = (360/60)*minutes ;
    minuteCircle.style.setProperty('--rotate',position + 'deg') ;
}
function setSeconds() {
    let position = (360/60)*seconds ;
    if (position == 0) {

        secondCircle.style.setProperty('--transtion-time', 'none') ;
        secondCircle.style.setProperty('--rotate',position + 'deg') ;

    }else {
        secondCircle.style.setProperty('--transtion-time', `${1}s`) ;
        secondCircle.style.setProperty('--rotate',position + 'deg') ;
    }
}

function setClock(){
    clockTime.querySelector('.h').innerText = hours;
    clockTime.querySelector('.m').innerText = minutes;
    clockTime.querySelector('.s').innerText = seconds;
    clockTime.querySelector('.zone').innerText = date.getHours() >= 12 ? 'PM' : 'AM';

}