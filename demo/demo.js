const range = require('range-slider-sbui')
const integer = require('input-integer-uisb')

const opts = { min: 0, max:10 }
const range_slider = range(opts)
const input_integer = integer(opts)

document.body.append(range_slider, input_integer)