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

var studList = []
var compList = []

var masList = []

var roomName = ''

var cObj = {

  topic: '',
  avg: 0,
  sList: [],
  cList: [],

}



io.on('connection', function(socket) {



//$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$


  socket.on('gathTopDat', function(rtData) {

    // console.log('rt ', rtData)

    if (cObj.topic !== rtData.topic) {

      cObj.topic = rtData.topic
        
        if(cObj.sList.indexOf(rtData.user) === -1) {

          cObj.sList.push(rtData.user)
          cObj.cList.push(rtData.comp)

        } else {

          // console.log(cObj.sList.indexOf(rtData.user))

        }
        
        // cObj.topic = rtData.topic

      
    // if topic
    } else {

      if(cObj.sList.indexOf(rtData.user) === -1) {

          cObj.sList.push(rtData.user)
          cObj.cList.push(rtData.comp)

          // console.log("USER ", cObj.sList, cObj.cList)

        } else {

          // console.log(cObj.sList.indexOf(rtData.user))
          var indx = cObj.sList.indexOf(rtData.user)
          cObj.cList[indx] = rtData.comp
        }

    }

    function getSum(total, num) {
          
            return total + num;
          
          }
        
          cObj.avg = (cObj.cList.reduce(getSum) / cObj.sList.length).toFixed(0)
    
          // console.log("USER ", cObj.avg)

    io.emit('gathTopDat', cObj)

  })


//$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$

  socket.on('addCompLvl', function(score) {

    io.emit('addCompLvl', score)

  })


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

    roomName = roomId

    io.emit('addRoomName', roomName)

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