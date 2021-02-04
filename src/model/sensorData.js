const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    temprature: {
        type: String
    },

    humidity: {
        type: String
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model("sensor-reading", dataSchema);