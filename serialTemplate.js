
const SerialPort = require('serialport');
const port = new SerialPort("COM4", {
  baudRate: 9600,
});


port.on("open", () => {
  console.log('serial port open');
});


const Readline = require('@serialport/parser-readline');
const parser = port.pipe(new Readline({ delimiter: '\n' }));


parser.on('data', data => {
  console.log('got word from arduino:', data);
});
















// const fs = require('fs');
// const path = require('path');
// const events= require('events');

// // first example  READSTREAM.........................................
// let streamEvent = fs.createReadStream('../../textdocument/document.txt', 'utf-8');
// streamEvent.on("data", (chunk) => {

//     fs.appendFile(path.join('../../textdocument/newDocument/TextDocument.txt'), chunk, (err) => {
//         if (err) {
//             console.error(err);
//         }
//     })
// })


// // second example EVENT EMMITEERS..................................
// let  myEvent= new events.EventEmitter();
// myEvent.on('goat', (params)=>{console.log(params)});
// myEvent.emit('goat',"goat is hungry");


// //third example MAKING DIRECTORIS.....................................
// fs.mkdir(path.join('../../textdocument','newDocument'), (err) => {
//     if (err)
//         return console.error(err);
//     console.log("succesfuly created directory")
// })


// // CREATING FILES BY FIRST READING FILES................................
// fs.readFile(path.join('../../textdocument/document.txt'), 'utf-8', (err, data) => {
//     if (err)
//         return console.error(err);

//     fs.appendFile(path.join('../../textdocument/newDocument/TextDocument.txt'), data, (err) => {
//         if (err) {
//             console.error(err);
//         }
//     })
// })


















// //fs.appendFile(path.join('../../textdocument,newDocument/',)

// // fs.mkdir(path.join(__dirname, 'test'), 
// //   { recursive: true }, (err) => { 
// //     if (err) { 
// //       return console.error(err); 
// //     } 
// //     console.log('Directory created successfully!'); 
// //   }); 