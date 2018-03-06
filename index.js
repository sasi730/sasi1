"use strict";

module.exports = function sasi(sentence, callback) {
  return new Promise((resolve, reject) => {
    if (sentence.length === 0) {
      reject('String, Please! e.g. "for your information"')
      return callback('String, Please! e.g. "for your information"')
    } else if (typeof sentence === 'function') {
      callback = sentence

      reject('¯\\_(ツ)_/¯')
      return callback('¯\\_(ツ)_/¯')
    } else {
      const words = sentence.split(' ')
      const sasi = words.map((word) => word[0])

      resolve(sasi.join(''))
      return callback(null, sasi.join(''))
    }
  })
}
