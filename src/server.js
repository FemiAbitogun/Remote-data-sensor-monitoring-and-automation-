const express = require('express');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started at port ${PORT} ....`) });



const mongoose=require('mongoose');

// database SENSORS connection.......................

mongoose.connect(process.env.database_sensor,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (err)
            return console.error(err);
        console.log("successfully connected to sensors database.......")
    }

)


app.use('/sensor', require('./route/sensor_reading'));
app.use('/user', require('./route/user'));








