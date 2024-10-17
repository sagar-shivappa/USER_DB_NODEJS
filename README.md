# NodeJS: Middleware in Express JS

## Project Overview

This project outlines the need and the usage of the middleware function used the express js projects.

## Project Goal

The goal is to create a simple and efficient Middleware functions:

- To log all the request methods and request path for the API end point.
- To handle the error handling functionality at the Global Error handling level.

## Provided Components

- **studentRoutes (`routes/studentRoutes.js`)**: This file defines the existing end points `/student/getRecord` and `/student/error`, these end point are already functional.
- **Express.js Application**: A basic Express.js application structure is provided, including essential dependencies and project setup.

> Note: You are not required to modify any existing code outside the `middleware` folder and `app.js` file.

## Implementation Tasks

### [middleware/logger.js](middleware/logger.js):

- Complete the middleware functionality to log the request method and request path
- Add the `next()` function to make the control pass over the middleware function.

### [middleware/error.handler.js](middleware/error.handler.js):

- Complete the middleware functionality to set the response status and response message as a part of error handling
- **Sample response**:

  ```json
  {
    "status": "error",
    "message": err.message || "Internal Server Error",
  }
  ```

- Add the `next()` function to make the control pass over the middleware function.

### [app.js](app.js):

- Add the imported middleware functions at the right position

## API Endpoints

### 1. Get student record (`GET /student/getRecord`)

- **Response** (on success):
  - Status Code: `200 OK`
  - Example Body:
    ```json
    [
      {
        "studentName": "Sundar",
        "studentID": 3,
        "standard": "2nd",
        "marks": {
          "english": 24,
          "science": 23,
          "mathematics": 30
        },
        "_id": "670d12422a5013158371deb7",
        "__v": 0
      }
    ]
    ```

## Commands

### Install Packages:

```bash
npm install
```

This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.

### Start MongoDB:

```bash
mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log
```

This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.

### Start API Server:

```bash
npm start
```

This command will start the server.

- Once the server is started, navigate to the Thunder Client's tab ![Thunder client's tab](https://media-doselect.s3.amazonaws.com/generic/ryM78VN71g10k2dKr9K2wGYwo/ThunderClientLogo.png) and click on `New Request`.
- Test the API endpoints by sending specific requests to http://localhost:8000/api/{endpoints}. You can view the JSON response in the "Response" tab.

### Run Test Cases:

```bash
npm test
```

This will run the test cases in the terminal.

> These commands can be executed in the terminal or by selecting the options from the `Run` menu.

## Environment

- Node Version: 14.21.3
- MongoDB Version: 7.0.3
- Default Port: 8000
