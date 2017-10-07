'use strict'

const Mocha = require('mocha')
const mocha = new Mocha({ timeout: 3000 })

const suite = [
    'dummy.js'
]

suite
.forEach((test) => mocha.addFile(test))

mocha
.run()
.on('end', process.exit)