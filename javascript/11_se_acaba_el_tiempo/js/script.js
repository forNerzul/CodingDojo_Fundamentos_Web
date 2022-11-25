function getSecondsSinceStartOfDay() {
    return (
        new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600
    );
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    document.getElementById("seconds").style.transform =
        "rotate(" + time * 6 + "deg)";
    document.getElementById("minutes").style.transform =
        "rotate(" + time / 10 + "deg)";
    document.getElementById("hour").style.transform =
        "rotate(" + time / 120 + "deg)";
}, 1000);
