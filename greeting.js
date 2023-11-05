let myName = document.querySelector("#myName")

let firstName = prompt("Adınız nedir?")

myName.innerHTML = firstName

function getWeekDay(date){
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

    return days[date]
}

function getTime(){
    let d =new Date()
    let time = document.querySelector("#myClock")
    time.innerHTML = `${d.toLocaleTimeString('tr-TR')} ${getWeekDay(d.getDay())}`
}

setInterval(getTime,1000)