'use strict'

const { expect } = require('chai')
const dummy = require('../')

describe('Dummy test', function () {
  it('should to be a true', function () {
      expect(dummy()).to.be.true
  })
})
