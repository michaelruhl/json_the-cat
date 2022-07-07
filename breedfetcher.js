const req = require('request')
const fileSys = require('fs')
const rLine = require('readline')

const url = process.argv[2]
console.log(url)
const local = process.argv[3]
let fullUrl = `https://api.thecatapi.com/v1/breeds/search?q=${url}`;

const fetchBreed = function(url, local) {
  req( fullUrl, (error, resp, body) => {
    if (error)  {
      console.log('fetchBreedError')
      console.log(error)
      return;
    } 
    console.log(body)
    console
  })
}
fetchBreed()