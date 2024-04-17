const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

function timer(){
    const currentYear = new Date().getFullYear();
    const diwali = new Date(`October 31 ${currentYear + 1} 00:00:00`);
    const curerentDate = new Date();
    const diff = diwali - curerentDate;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const min = Math.floor((diff / 1000 / 60) % 60);
    const sec = Math.floor((diff / 1000) % 60);
    
    days.innerHTML=day<10?"0"+day:day;
    hours.innerHTML=hour<10?"0"+hour:hour;
    mins.innerHTML=min<10?"0"+min:min;
    secs.innerHTML=sec<10?"0"+sec:sec;
}


setInterval(timer,1000);