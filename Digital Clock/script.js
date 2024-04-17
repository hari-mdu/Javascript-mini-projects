function DigitalClock() {
    const hours = document.querySelector(".hours");
    const mins = document.querySelector(".mins");
    const secs = document.querySelector(".secs");
    const meridian = document.querySelector(".meridian")

    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = min < 10 ? "0" + min : min;
    secs.innerHTML = sec < 10 ? "0" + sec : sec;

    if (hour >= 0 && hour < 12) {
        meridian.innerHTML = "AM";
    }
    else {
        meridian.innerHTML = "PM";
    }
}

setInterval(DigitalClock, 1000);