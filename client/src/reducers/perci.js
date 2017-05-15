

const initialState = {



    //......

    user: 'INSTNAME',
    stud_user: 'STUDNAME',
    studList: ['user', 'user'],
    curr_topic: 'TOPIC',
    room: 'ROOM',
    tpc_list: ['Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top'],
    avg_list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    csList: [],
    ssList: [], 


    //.....


    is_inst: false,
    user_scale: 0,
    comp_list: [],
    curr_comp_list: [],
    curr_avg: 0,
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
      },

      cdata: {

        labels: [''],

        datasets: [{

            label: 'User Comp Level',

            data: [
            0
              
            ]

        }]
      }

}





export default function perciReducer(state=initialState, action) {

// console.log('60 ', action)

    switch (action.type) {

        case 'ADD_MESSAGE':

          return {
            
            ...state, 
            messages: [...state.messages, action.message]

          }


//--------------------------

          case 'GATH_TOP_DATA':

          state.tpc_list.splice(0, 1)

          return {
            
            ...state, 
            tpc_list:[...state.tpc_list, action.gTop] 

          }
//--------------------------

//--------------------------

          case 'GATH_AVG_DATA':

          return {
            
            ...state, 
            avg_list: action.gAvgList

          }
//--------------------------



         case 'UPDATE_GRPH':
         // console.log('GraphUpdate')

            return {

              ...state,
              gdata: { 
                labels: state.tpc_list,
                datasets: [{
                  label: 'Avg of Votes',
                  data: state.avg_list,
                  pointBackgroundColor: 'white',
                  backgroundColor: 'rgba(128,191,255,0.2)',
                  borderColor: 'white',
                  borderWidth: 1,
                  hoverBorderColor: 'red'
                  
                }]
              }, 

            cdata: { 
                labels: state.ssList,
                datasets: [{
                  label: 'User Comp Level',
                  data: state.csList,
                  pointBackgroundColor: 'white',
                  backgroundColor: 'rgba(128,191,255,0.2)',
                  borderColor: 'white',
                  borderWidth: 1,
                  hoverBorderColor: 'red'
                  
                }]
              } 

              

            }

//--------------------------
        case 'UPDATE_USR_DATA':

        return {
            
            ...state, 

            ssList: action.ssList

        }

 
//--------------------------


        case 'UPDATE_USR_GRAPH':

        return {
            
            ...state, 

            csList: action.csList,

        }


//--------------------------


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
          case 'ADD_STUD_NAME':

            return {

              ...state, 
              stud_user: action.user

            } 
//--------------------------

//--------------------------
          
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
              //tpc_list: [...state.tpc_list, action.curr_topic],
              

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