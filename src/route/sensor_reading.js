const express = require('express');
const router = express.Router();

const SerialPort = require('serialport');
const port = new SerialPort("COM4", { baudRate: 9600, });




port.on("open", () => {
    console.log('serial port open');
});

const Readline = require('@serialport/parser-readline');
const parser = port.pipe(new Readline({ delimiter: '\n' }));


let Sensor_Reading = require('../model/sensorData'); // mongoose constructor.........


parser.on('data', async (data) => {
    // 0123456789abc     
    // tem=22;hum=30
    try {
        let payload = data
        let temprature = payload.substring(4, 6);
        let humidity = payload.substring(11, 13);
        let readings = new Sensor_Reading({
            temprature: temprature,
            humidity: humidity
        });


        // save readings to database....................................
        let savedReadings = await readings.save();
        //post current readings to front end............................
        router.get("/currentReadings", async (req, res) => {
            try {
                res.status(200).json(
                    {
                        temprature: temprature,
                        humidity: humidity
                    }
                );
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        })
    }
    catch (error) {
        console.log(error);
    }
});

// fetch all readings from the database.......................................
router.get("/", async (req, res) => {
    try {
        let readings = await Sensor_Reading.find();
        res.status(200).json(readings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports=router;