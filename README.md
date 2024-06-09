Flask Performance Testing
This repository contains code for performance testing a web application built using the Flask framework. The primary objective is to determine the maximum number of users the application can handle and measure the Requests Per Second (RPS) for each type of request.

Features
Two types of requests:
/index: Returns the string "Hello".
/moreload: Generates an array of 1000 random integers and returns their sum.
Request distribution:
1 user has a 1/5 probability of requesting /moreload. Otherwise, requests go to /index.
Performance criteria:
Maximum acceptable response times:
/index: 100 ms
/moreload: 500 ms
Getting Started
Prerequisites
Docker
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/flask-performance-testing.git
Navigate to the project directory:

bash
Copy code
cd flask-performance-testing
Build the Docker image:

bash
Copy code
docker build -t flask-performance .
Usage
Run the Docker container:

bash
Copy code
docker run -d -p 5000:5000 flask-performance
Access the application in your web browser:

arduino
Copy code
http://localhost:5000
Performance Testing
Load generation can be conducted using tools like Locust or K6. Follow the provided test scenarios and methodology in the Performance Testing and Analysis Report for detailed instructions on conducting performance tests.
