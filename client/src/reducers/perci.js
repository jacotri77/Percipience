
const initialState = {

    is_inst: false,
    user: 'USERNAME',
    user_scale: 0,
    topic: 'TOPIC',
    room: 'ROOM'


}

export default function perciReducer(state=initialState, action) {

    switch (action.type) {

        case 'ADD_MESSAGE':

            return {...state, messages: [...state.messages, action.message]

            }


        case 'ADD_COMP_LVL':

console.log(action)

            return {

              ...state, 
              user_scale: action.user_scale

            }


        default:

            return state

    }
}