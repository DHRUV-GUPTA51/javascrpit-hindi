const ans = document.getElementById('clock');

setInterval(function(e) {
    let date = new Date()
    ans.innerHTML = date.toLocaleTimeString();
}, 1000);