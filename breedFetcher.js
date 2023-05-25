const args = process.argv.slice(2);

const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + args, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  if (error === null) {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof body);
    // console.log("First obj is:", data[0]);

    try {
      console.log(data[0].description);
    } catch (err) {
      console.log("Breed Not Found");
    }

  } else {
    console.log("Request Failed");
  }
  
});