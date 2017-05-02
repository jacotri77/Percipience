import io from 'socket.io-client'
import store from '../store'
import axios from 'axios'
const socket = io.connect('http://10.68.0.156:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

export function getJson() {
	axios.get('http://locahost:3001/db').then(res =>{
		store.dispatch({
			type:'GET_JSON',
			json: res.data
		})
	})

}