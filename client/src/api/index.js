import axios from 'axios';

const url = 'https://techstarsuk.herokuapp.com/events';

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);