import EventFinder from '../models/eventFinder.js';

export const getEvents = async (req, res) => {
    let query = {};
    if(req.query.category) {
        query.category = req.query.category
    }
    try {
        const events = await EventFinder.find(query);

        res.status(200).json(events);

    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;

    const newEvent = new EventFinder(event);
    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch(error) {
        res.status(409).json({ message: error.message})
    }
}