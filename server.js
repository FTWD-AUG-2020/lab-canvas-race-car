console.log("Helllllllo server");
const express = require("express");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
app.use(express.static("public"))
// listen for when websites accessed by new client
io.on("connection", (socket) => {
  console.log("margarita")
  // listen for keypress on client
  socket.on("keypressed",(action)=>{
    console.log(action)
    // broadcast action to all clients
    io.emit("carmove",action)
  })
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(port, () => {
  console.log("Listening brother and sister");
});



