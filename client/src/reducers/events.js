import { FETCH_ALL, FETCH_BY_CATEGORY} from "../actions/constants";

export default (events = [],  action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_CATEGORY:
            return action.payload.filteredEvents;
        // case 'CREATE':
        //     return [...events, action.payload];
        default:
            return events;
    }
}