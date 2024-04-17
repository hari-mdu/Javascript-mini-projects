const hours = document.querySelector('.hr')
const mins = document.querySelector('.min')
const secs = document.querySelector('.sec')


setInterval(runCLock,1000)

function runCLock(){
    const sec = new Date().getSeconds()/60;
    const min = (sec + new Date().getMinutes())/60;
    const hour = (min + new Date().getHours())/12;

    hours.style.setProperty('--rotation',hour*360);
    mins.style.setProperty('--rotation',min*360);
    secs.style.setProperty('--rotation',sec*360);

}

runCLock()