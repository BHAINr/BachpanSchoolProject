import { CLEAR_ERRORS, CREATE_ADF_FAIL, CREATE_ADF_REQUEST, CREATE_ADF_SUCESS } from "../constants/fomeconstants";
import axios from "axios"; 

export const admissionFomeDetail = (class, firstName, lastName, email,mobileNo, description ) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ADF_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/v1/adf/new`, { class, firstName, lastName, email,mobileNo, description }, config);

        dispatch({ type: CREATE_ADF_SUCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: CREATE_ADF_FAIL, payload: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });

};