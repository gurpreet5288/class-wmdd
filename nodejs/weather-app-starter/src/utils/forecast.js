const request = require('request');

const forecast = ({lat, long, location}, callback) => {

    const url = 'https://api.darksky.net/forecast/288ece7e7dfd4a10734e0281288b530e/' + lat + ',' + long + '?units=si';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Connection to Weather Service Not Available', undefined);
        } else if (body.error) {
            callback('Unable to find Location', undefined);
        } else {
            callback(undefined, `It\'s currently ${body.currently.temperature} degrees in ${location} and ${body.daily.data[0].summary} There is a ${(body.currently.precipProbability * 100)}% chance of rain.`);
        }
    })
}

module.exports = forecast