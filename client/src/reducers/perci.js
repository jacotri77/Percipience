

const initialState = {



    //......

    user: 'INSTNAME',
    stud_user: 'STUDNAME',
    curr_topic: 'TOPIC',
    room: 'ROOM',
    tpc_list: ['Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top', 'Top'],
    avg_list: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],    

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
          case 'ADD_STUD_NAME':

            return {

              ...state, 
              stud_user: action.user

            } 
//--------------------------

//--------------------------
          case 'GATH_RT_DATA':

          console.log(action.cObj)

          var avr = Number(action.cObj.avg)
          var top = Number(action.cObj.topic)

            return {

              ...state, 
              gdata: { 

                labels: [...state.gdata.labels, top],
                datasets: [{
                  label: 'Avg of Votes',
                  data: [...state.gdata.datasets.data, avr],
                  pointBackgroundColor: 'white',
                  backgroundColor: 'rgba(128,191,255,0.2)',
                  borderColor: 'white',
                  borderWidth: 1,
                  hoverBorderColor: 'red'
                  
                }]
              } 

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