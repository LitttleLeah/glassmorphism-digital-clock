setInterval(() => {
    const time = document.querySelector("#time");
    const time_format = document.getElementById('ampm');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(time_format.checked){
        // time-format = 12 hrs
        let ampm = "am"
        if(hours >= 12){
            ampm = "pm"
        }
        if(hours > 12 ) {
            hours = hours - 12;
        }
        if(hours <10) {
            hours = "0" + hours;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        time.textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
    }else{
        // time-format = 24 hrs
        time.textContent = hours + ":" + minutes + ":" + seconds;
    }
});