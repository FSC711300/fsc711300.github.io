timenow = document.getElementById("timeNow");
setInterval(function () {
    timenow.innerHTML = new Date().toLocaleString();
}, 100)