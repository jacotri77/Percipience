const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// app.get("*", function(req, res){
//     res.sendfile(__dirname + '/client/public/index.html')
// })

// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })




io.on('connection', function(socket) {



  socket.on('getNumStud', function() {


    var nspSockets = io.of('/').sockets;

    var studCnt = Object.keys(nspSockets).length

      var userId = socket.client.conn.id

    console.log('STUD COUNT ', studCnt, userId)

    io.emit('getNumStud', studCnt, userId)


  })

  socket.on('addMessage', function(message) {

    io.emit('newMessage', message)

  })


  socket.on('addCompLvl', function(score) {

    io.emit('addCompLvl', score)

  })



  socket.on('addRoomName', function(roomId) {

    io.emit('addRoomName', roomId)

  })

  socket.on('addNewTopic', function(curr_topic) {

    io.emit('addNewTopic', curr_topic)

  })

  socket.on('addUserName', function(user) {
    var userId = socket.client.conn.id
 console.log('addUserName ', user, userId)
    io.emit('addUserName', user, userId)

  })

  socket.on('updateGrph', function(gd) {

    io.emit('updateGrph', gd)

  })

  socket.on('updateTime', function(ut) {

    io.emit('updateTime', ut)
  })

//>>
})


server.listen(3001, function(){
    console.log('listening on port 3001')
})