let timeHour = document.querySelector("#time_hour")
let timeMin = document.querySelector("#time_min")
let timeSc = document.querySelector("#time_sc")
let date = document.querySelector(".date")


function updateClock (){
    const time = new Date ()

let timeHours = time.getHours().toString().padStart(2, "0")
let timeMinutes = time.getMinutes().toString().padStart(2, "0")
let timeSeconde = time.getSeconds().toString().padStart(2, "0")

timeHour.innerHTML = `${timeHours}`
timeMin.innerHTML = `${timeMinutes}`
timeSc.innerHTML = `${timeSeconde}`
}

setInterval(updateClock , 1000)

updateClock()