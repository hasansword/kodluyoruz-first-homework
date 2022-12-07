let isim = prompt("Lütfen adınızı Giriniz")
let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
var timerFunc = setInterval(myTimer, 1000)

document.querySelector("#name").innerHTML = "Merhaba "+isim+ " hoş geldiniz.";


function myTimer(){
    const d = new Date()
    document.querySelector("#timer").innerHTML = d.toLocaleTimeString()
    day = days[d.getDay()-1]
    document.querySelector("#date").innerHTML = day
}
