const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);

    if (error === null) {
      const data = JSON.parse(body);

      try {
        callback(null, data[0].description);
      } catch (err) {
        callback(null, "Breed Not Found");
      }

    } else {
      callback(error, null);
    }
    
  });

};

module.exports = { fetchBreedDescription };