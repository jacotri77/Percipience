
const initialState = {

    is_inst: false,
    user: 'USERNAME',
    user_scale: 0,
    comp_list: [],
    curr_topic: 'TOPIC',
    tpc_list: [],
    room: 'ROOM',
    vote: 0,

    gdata: {

        labels: [],

        datasets: [{

            label: 'Comp Level',

            data: []

        }]
      }


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
              comp_list: [...state.comp_list, action.user_scale],

              

            }

//--------------------------

//--------------------------

         case 'UPDATE_GRPH':

            return {

              ...state,

              gdata: { 

                labels: state.tpc_list,
                datasets: [{
                  label: '# of Votes',
                  data: state.comp_list
                }]
              } 

              

            }

//--------------------------



/*


*/



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
              curr_topic: action.curr_topic,
              tpc_list: [...state.tpc_list, action.curr_topic],
              

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