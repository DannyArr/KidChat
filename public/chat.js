// For reference:  https://www.w3schools.com/jsref/met_win_scrollto.asp

// Make connection
// Can just use io() instead of io.connect() when in same domain, but better to be specific.
var socket = io.connect("http://clanrobertson.ddns.net:4000");
var audio = new Audio('./files/message.mp3');

// Query DOm
var message     = document.getElementById("message"),
    handle      = document.getElementById("handle"),
    button_send = document.getElementById("send"),
    output      = document.getElementById("output"),
    form        = document.getElementById("form"),
    chatWindow  = document.getElementById("chat-window")
    feedback    = document.getElementById("feedback");

function sendMessage(event) {

    event.preventDefault();

    if( message.value != "" ) {
        socket.emit("chat",{
            message: message.value,
            handle: handle.value
        });

        message.value=""
    }

};

// Emit events on send
form.addEventListener("submit",sendMessage);

// Listen for events
socket.on("chat",function(data){
    output.innerHTML += "<p><strong>" + data.handle + ":" + "</strong>" + data.message + "</p>";
    feedback.innerHTML = "";
    output.scrollIntoView(false);

    if( data.handle != handle.value ){
        audio.play();
    }
    
});

// Broadcasting "user is typing"
message.addEventListener("keydown",function(){
    socket.emit("typing",handle.value);
});

socket.on("typing",function(data){
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

