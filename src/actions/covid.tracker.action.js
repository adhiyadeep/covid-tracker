import {LOADING, STOP_LOADING,COVID_DATA_SUCCESS} from '../types/types';
import { getApi } from "../services/api"

export const getCovidData = () => {
    return (async (dispatch) => {
        dispatch({ type: LOADING })
        await getApi("state_district_wise")
            .then((res) => {
                dispatch({ type: STOP_LOADING })
                if (res) {
                    dispatch({ type: COVID_DATA_SUCCESS , payload: res})
                }
            }).catch((err) => {
                dispatch({ type: STOP_LOADING })
                console.log("err", err);
            })
    })
}
