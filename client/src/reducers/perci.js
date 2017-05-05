
const initialState = {

    is_inst: false,
    user: 'USERNAME',
    user_scale: 0,
    comp_list: [],
    curr_topic: 'TOPIC',
    room: 'ROOM',
    vote: 0,

//     chartData: [

//     {   user:'USERNAME',
//         user_scale:0
//     }

// ]

}

export default function perciReducer(state=initialState, action) {

    switch (action.type) {

        case 'ADD_MESSAGE':

          return {
            
            ...state, 
            messages: [...state.messages, action.message]

          }

//--------------------------

         case 'ADD_COMP_LVL':

            return {

              ...state, 
              user_scale: action.user_scale,
              comp_list: [...state.comp_list, action.user_scale]

            }

//--------------------------



          case 'ADD_ROOM_NAME':

            return {

              ...state, 
              room: action.room

            } 

//--------------------------

          case 'ADD_USR_NAME':

            return {

              ...state, 
              user: action.user

            } 

//--------------------------

//--------------------------

          case 'ADD_USR_TYP':

            return {

              ...state, 
              is_inst: action.is_inst

            } 

//--------------------------

          case 'ADD_ROOM_TOPIC':

            return {

              ...state, 
              curr_topic: action.curr_topic

            }   

//--------------------------
      
          case 'POST_VOTE':

            return{

              ...state, vote: [...state.vote, action.vote]
              
            }

//--------------------------
            
        default:

            return state

    }
}