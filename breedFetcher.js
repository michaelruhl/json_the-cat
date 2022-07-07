const req = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const fullUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  req(fullUrl, (error, resp, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('thats not a cat breed');
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
