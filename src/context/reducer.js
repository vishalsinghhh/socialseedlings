import {CHANGE_MODE} from "./actions"

const reducer = (state, action)=>{
    if (action.type === CHANGE_MODE){
        return{
            ...state,
            mode:action.payload.value
        }
    }
}

export default reducer