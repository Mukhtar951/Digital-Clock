const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.querySelector(".ampm")

function updateClock() {
    let h = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    
    h = h < 10 ? `0${h}`: h;
    m = m < 10 ? `0${m}`: m;
    s = s < 10 ? `0${s}`: s;
    ampm.innerText = ampm.InnerText > 12 ? "PM" : "AM"
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
}

updateClock();
setInterval(updateClock,1000)