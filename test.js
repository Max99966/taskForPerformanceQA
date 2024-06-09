const http = require('k6/http');
const {sleep} = require('k6');

const BASE_URL = 'http://localhost:3000';
const routes = ['/index', '/moreload'];

const getRandomRoute = () => {
    return Math.random() < 0.2 ? routes[1] : routes[0];
};

const options = {
    stages: [
        {duration: '1m', target: 10}, // simulate ramp-up of traffic from 1 to 10 users over 1 minute.
        {duration: '2m', target: 50}, // stay at 50 users for 2 minutes
        {duration: '2m', target: 100}, // ramp-up to 100 users over 2 minutes
        {duration: '2m', target: 150}, // stay at 150 users for 2 minutes
        {duration: '2m', target: 200}, // ramp-up to 200 users over 2 minutes
        {duration: '2m', target: 0}, // ramp-down to 0 users over 2 minutes
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

module.exports.options = options;

module.exports.default = function () {
    const randomRoute = getRandomRoute();
    const startTime = new Date();
    const response = http.get(`${BASE_URL}${randomRoute}`);
    const endTime = new Date();
    const duration = endTime - startTime;
    console.log(`Status: ${response.status}, Duration: ${duration}ms, Route: ${randomRoute}`);
    sleep(1);
};