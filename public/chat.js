// Make connection
// Can just use io() instead of io.connect() when in same domain, but better to be specific.
var socket = io.connect("http://clanrobertson.ddns.net:4000");

// Query DOm
var message     = document.getElementById("message");
    handle      = document.getElementById("handle");
    button_send = document.getElementById("send");
    output      = document.getElementById("output");

// Emit events on send
button_send.addEventListener("click",function(){
    socket.emit("chat",{
        message: message.value,
        handle: handle.value
    });
});

// Listen for events
socket.on("chat",function(data){
    output.innerHTML += "<p><strong>" + data.handle + ":" + "</strong>" + data.message + "</p>";
});
