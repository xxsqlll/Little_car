
"use strict";

let AnalogWrite = require('./AnalogWrite.js')
let DigitalSetDirection = require('./DigitalSetDirection.js')
let DigitalRead = require('./DigitalRead.js')
let AnalogRead = require('./AnalogRead.js')
let ServoRead = require('./ServoRead.js')
let DigitalWrite = require('./DigitalWrite.js')
let ServoWrite = require('./ServoWrite.js')

module.exports = {
  AnalogWrite: AnalogWrite,
  DigitalSetDirection: DigitalSetDirection,
  DigitalRead: DigitalRead,
  AnalogRead: AnalogRead,
  ServoRead: ServoRead,
  DigitalWrite: DigitalWrite,
  ServoWrite: ServoWrite,
};
