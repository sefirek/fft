'use strict';

const DFT = require('./DFT');
const Complex = require('./Complex');
const ComplexArray = require('./ComplexArray');
const utils = {
  MagPha:require('./util/MagPha'),
  MagPhaArray: require('./util/MagPhaArray'),
};

module.exports = {
  DFT,
  Complex,
  ComplexArray,
  utils,
}