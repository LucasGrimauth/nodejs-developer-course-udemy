const yargs = require("yargs");
const axios = require("axios");

const geocodeKey = "AIzaSyBaUiPfipgnzOmen-UID2Y48IgM1SUxVos";
const weatherKey = "55818d5d366593f65582606d35f5e9ba";

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv;

const encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${geocodeKey}`;

axios
  .get(geocodeUrl)
  .then(res => {
    if (res.data.status === "ZERO_RESULTS" || res.data.status === "INVALID_REQUEST") {
      throw new Error("Unable to find that address.");
    }
    var latitude = res.data.results[0].geometry.location.lat;
    var longitude = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}?units=si`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(res => {
    var data = res.data.currently;
    //console.log(JSON.stringify(data, undefined, 2));
    console.log(`The weather is ${data.summary} and the current temperature is ${data.temperature} celsius`)
  })
  .catch(e => {
    if(e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(e.message);
    }
  });




