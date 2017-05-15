const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded( {     // to support URL-encoded bodies

  extended: true
})); 



var studList = [],
    compList = [],
    masList = [],
    roomName = '',
    cObj = {
      topic: '',
      avg: 0,
      sList: [],
      cList: [],
    }



io.on('connection', function(socket) {


  socket.on('gathTopDat', function(rtData) {

    if (cObj.topic !== rtData.topic) {

      cObj.topic = rtData.topic
        
        if (cObj.sList.indexOf(rtData.user) === -1) {

          cObj.sList.push(rtData.user)

          cObj.cList.push(rtData.comp)
        } 
        
    } else {

      if (cObj.sList.indexOf(rtData.user) === -1) {

          cObj.sList.push(rtData.user)

          cObj.cList.push(rtData.comp)

        } else {

          var indx = cObj.sList.indexOf(rtData.user)
          
          cObj.cList[indx] = rtData.comp
        }
    }

    function getSum(total, num) {
          
      return total + num;    
    }
        
    cObj.avg = (cObj.cList.reduce(getSum) / cObj.sList.length).toFixed(0)
    
    io.emit('gathTopDat', cObj)
  })



  socket.on('addCompLvl', function(score) {

    io.emit('addCompLvl', score)
  })



  // socket.on('getNumStud', function() {


  //   var nspSockets = io.of('/').sockets;

  //   var studCnt = Object.keys(nspSockets).length

  //   var userId = socket.client.conn.id

  //   io.emit('getNumStud', studCnt, userId)
  // })


socket.on('getRoomName', function() {

    console.log('from server ', roomName)
    io.emit('getRoomName', roomName)
  })

  

  socket.on('addCompLvl', function(score) {

    io.emit('addCompLvl', score)
  })



  socket.on('addRoomName', function(roomId) {

    roomName = roomId

    io.emit('addRoomName', roomName)
  })


  socket.on('addNewTopic', function(curr_topic) {

    io.emit('addNewTopic', curr_topic)
  })


})


server.listen(3001, function(){
    console.log('listening on port 3001')
})