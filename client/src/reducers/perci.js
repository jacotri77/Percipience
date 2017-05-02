
const initialState = {

    is_inst: false,
    user: 'USERNAME',
    user_scale: 0,
    topic: 'TOPIC',
    room: 'ROOM',
    chartData: [

    {   user:'USERNAME',
        user_scale:0
    }

]

}

export default function perciReducer(state=initialState, action) {

    switch (action.type) {

        case 'ADD_MESSAGE':

            return {...state, messages: [...state.messages, action.message]

            }


        case 'ADD_COMP_LVL':

            return {

              ...state, 
              user_scale: action.user_scale

            }

        case 'GET_JSON':

            return {

              ...state, 
              json: {...action.json}

            }
            
        default:

            return state

    }
}