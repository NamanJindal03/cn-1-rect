import { INCREMENT, DECREMENT } from "../actions/counterActions"
export default function reducer(state, payload){
    console.log(state)
    console.log(payload)
    switch(payload.type){
        case INCREMENT:
            return {...state, count: state.count + payload.data}
        case DECREMENT:
            return  {...state, count: state.count - 1}
        default: 
            return state
    }
}