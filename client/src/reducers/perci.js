

const initialState = {



    is_inst: false,
    user: 'USERNAME',
    user_scale: 0,
    comp_list: [0],
    curr_comp_list: [0],
    curr_topic: 'TOPIC',
    curr_avg: 0,
    tpc_list: [],
    room: 'ROOM',
    vote: 0,
    
    users: [
      {

        user: ''

      }

    ],

    gdata: {

        labels: [''],

        datasets: [{

            label: 'Comp Level',

            data: [
            0
              
            ]

        }]
      }

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
                  label: 'Avg of Votes',
                  data: state.comp_list,
                  pointBackgroundColor: 'white',
                  backgroundColor: 'rgba(128,191,255,0.2)',
                  borderColor: 'white',
                  borderWidth: 1,
                  hoverBorderColor: 'red'
                  
                }]
              } 

              

            }

//--------------------------

  case 'UPDATE_TIME':

            return {

              ...state,

             

              tdata: { 

                labels: state.curr_topic,
                datasets: [{
                  label: 'Topics',
                  data: state.tpc_list,
                  pointBackgroundColor: 'white',
                  backgroundColor: 'rgba(128,191,255,0.2)',
                  borderColor: 'white',
                  borderWidth: 1,
                  hoverBorderColor: 'red'
                  
                }]
              } 

              

            }

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
      
          case 'ADD_USERS':

            return{

              ...state, 

              user: action.user,
              users: [...state.users, action.user]
               
              
              
            }

//--------------------------
//    
//--------------------------
      
          case 'GET_AVG_SCORE':

            return{

              ...state, 

              curr_avg: action.avg
               
              
              
            }

//--------------------------

        default:

            return state

    }
}