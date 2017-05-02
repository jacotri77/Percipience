
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

          return {

            ...state, 
            messages: [...state.messages, action.message]

          }

         case 'ADD_COMP_LVL':

            return {

              ...state, 
              user_scale: action.user_scale

            }


          case 'ADD_ROOM_NAME':

            return {

              ...state, 
              room: action.room

            } 

          case 'ADD_ROOM_TOPIC':

            return {

              ...state, 
              topic: action.topic

            }   

            
        default:

            return state

    }
}