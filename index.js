// https://www.youtube.com/watch?v=ggVsXljT0MI
// https://github.com/iamshaunjp/websockets-playlist

var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log("listening to requests on port 4000");
});

// Static files
app.use(express.static("public"));

// Socket setup
var io = socket(server);
io.on("connection", function(socket){
    console.log("Made a socket connection", socket.id);

    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });
});