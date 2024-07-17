import { CLEAR_ERRORS, CREATE_ADF_FAIL, CREATE_ADF_REQUEST, CREATE_ADF_SUCESS } from "../constants/fomeconstants";


//Post data from ADF
export const adfFome = (state={}, action)=>{
    switch(action.type){
        case CREATE_ADF_REQUEST:
            return{
                ...state,
                loading:true
            };
        case CREATE_ADF_SUCESS:
            return{
                loading: false,
                order: action.payload,
            }    
        case CREATE_ADF_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;    
    }
}