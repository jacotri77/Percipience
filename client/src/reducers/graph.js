

const gdata: {

        labels: ["CAL", "Blue", "Yellow", "Green", "Purple", "Orange"],

        datasets: [{

            label: 'Comp Level',

            data: [1, 9, 33, 25, 42, 23]

        }]
} 



export default function grphReducer(state=initialState, action) {

    switch (action.type) {

        case 'ADD_MESSAGE':

          return {
            
            ...state, 
            messages: [...state.messages, action.message]

          }
        //--------------------------
            
        default:

            return state

    }
}


