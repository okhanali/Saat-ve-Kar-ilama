let isim = prompt("Lütfen adınızı giriniz");
document.getElementById('myName').innerText = isim;



function showTime() {

    let now = new Date();
    

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let dayName = days[now.getDay()];

    let timeString = hours + ":" + minutes + ":" + seconds + " " + dayName;
    

    document.getElementById("myClock").innerText = timeString;
    

    setTimeout(showTime, 1000);
}

showTime();
