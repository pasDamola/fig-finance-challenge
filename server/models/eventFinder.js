import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    date: {
        type: Date,
        default: new Date(),
    },
    isVirtual: Boolean,
    address: String,
    selectedFile: String,
})

const EventFinder = mongoose.model('EventFinder', eventSchema);

export default EventFinder;