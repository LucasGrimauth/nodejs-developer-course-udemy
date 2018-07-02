const request = require("request");

var key = "55818d5d366593f65582606d35f5e9ba";

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, body.currently);
    } else {
      callback("Can't get weather, weird...");
    }
  })
};

module.exports = {
  getWeather
}