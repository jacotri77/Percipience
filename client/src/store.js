import {createStore} from 'redux'
import perciReducer from './reducers/perci'

const store = createStore(perciReducer)

export default store