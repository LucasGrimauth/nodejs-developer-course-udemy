const key = "AIzaSyBaUiPfipgnzOmen-UID2Y48IgM1SUxVos";
var request = require("request");

var geocodeAddress = address => {

  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject("Unable to connect to Google Services Nooooooo D:");
      } else if (body.status === "ZERO_RESULTS" || body.status === "INVALID_REQUEST") {
        reject("I think this address doesn't exist :-|");
      } else if (body.status === "OK") {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });

  });
};

geocodeAddress("19146")
.then(location => {
  console.log(location)
})
.catch(error => {
  console.log(error);
});