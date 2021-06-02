import { LOADING,COVID_DATA_SUCCESS, STOP_LOADING } from '../types/types'

const initState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
    data: null,
}

const covidDataReducer = (state=initState, action) => {
    switch (action.type){
        case LOADING:
            return {...state,isLoading:true}
        case STOP_LOADING:
            return {...state,isLoading:false}
        case COVID_DATA_SUCCESS:
            return {...state,isLoading:false,isSuccess:true, data: action.payload}
        default:
             return initState;
    }
}

export default covidDataReducer;