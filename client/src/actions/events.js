import * as api from '../api';
import { FETCH_ALL, FETCH_BY_CATEGORY} from './constants'

// Action creators

export const getEvents = () => async(dispatch)  => {
    try {
        const { data } = await api.fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch(error) {
        console.log(error.message);
    }
}

export const getEventsByCategory = (category) => async(dispatch) => {
    try {
        const { data } = await api.fetchEvents();
        dispatch({ type: FETCH_BY_CATEGORY,         
                payload: {
                    filteredEvents: data.filter(ev => ev.category === category)
                }});
    } catch(error) {
        console.log(error.message);
    }
}

// export const createEvent = (event) => async (dispatch) => {
//     try {
//         const { data } = await api.createEvent(event);

//         dispatch({type: 'CREATE', payload: data });
//     } catch(error) {
//         console.log(error);
//     }
// }