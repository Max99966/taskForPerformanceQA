const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { performance } = require('perf_hooks');

app.use(bodyParser.json());

app.get('/index', (req, res) => {
    const start = performance.now();
    const response = "Hello";
    const end = performance.now();
    const executionTime = end - start;
    if (executionTime > 100) {
        console.warn(`Warning: Execution time for /index exceeded limit (${executionTime} ms)`);
    }
    res.send(response);
});

app.get('/moreload', (req, res) => {
    const start = performance.now();
    const numbers = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
    const end = performance.now();
    const executionTime = end - start;
    if (executionTime > 500) {
        console.warn(`Warning: Execution time for /moreload exceeded limit (${executionTime} ms)`);
    }
    res.send(sumOfNumbers.toString());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});