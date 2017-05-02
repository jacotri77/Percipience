import io from 'socket.io-client'
import store from '../store'
// 10.68.0.107
const socket = io.connect('http://10.68.0.107:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})


export function addCompLvl(score) {

  console.log('api ', score)
  socket.emit('addCompLvl', score)
}

socket.on('addCompLvl', function(score) {


console.log('api socket', score)
  store.dispatch( {

    type: 'ADD_COMP_LVL',
    user_scale: score

  })
})
