## Steps of commands to run in terminal

1. `docker build -t performance/task:1.0 .`
2. `docker run -p 3000:3000 docker.io/performance/task:1.0`
3. `k6 run test.js`

You'll need the docker and k6 frameworks installed.
