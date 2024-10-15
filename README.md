# NodeJS: Student's Record Management API

## Project Overview

This project outlines the development of a RESTful API using Express.js and MongoDB to manage students data. The API allows student records to be created and retrieved from a MongoDB database.

## Project Goal

The goal is to create a simple and efficient API that allows the client to:

- Add new student's marks record to the system.
- Retrieve the student's record using student id.

## Provided Components

- **ScoreCard Model (`models/scoreCardModel.js`)**: This file defines the Mongoose schema for the ScoreCrad model, including properties like `studentName`, `studentID`,`standard` and `marks`.
- **Express.js Application**: A basic Express.js application structure is provided, including essential dependencies and project setup.

> Note: You are not required to modify any existing code outside the `routes` folder.

## Implementation Tasks

### [routes/studentRoutes.js](routes/studentRoutes.js):

Define routes and add logic for the following API endpoints:

- **`/student`**:
  - **GET**: Retrieves student's record from the MongoDB collection using student id.
  - **POST**: Creates a new student record and adds them to the MongoDB collection based on data from request body.

## API Endpoints

### 1. Create a New User (`POST /student/addRecord`)

- **Request Body**:
  ```json
  {
    "studentName": "Sundar",
    "studentID": 3,
    "standard": "2nd",
    "marks": {
      "english": 24,
      "science": 23,
      "mathematics": 30
    }
  }
  ```
- **Response** (on success):
  - Status Code: `201 Created`
  - Example Body:
    ```json
    {
      "message": "Created Student Report"
    }
    ```
- **Response** (on failure):
  - Status Code: `400 Bad Request`
  - Body:
    ```json
    { "message": err.message }
    ```

### 2. Get student record (`GET /student/getRecord/:studentID`)

Should pass the valid student id as the query parameter

- **Response** (on success):
  - Status Code: `200 OK`
  - Example Body:
    ```json
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
    ```
- **Response** (on **Invalid** student id):

  - Status Code: `404 Not Found`
  - Body:

    ```json
    { "message": "Invalid Student ID" }
    ```

- **Response** (on failure):
  - Status Code: `500 Internal Server Error`
  - Body:
    ```json
    { "message": err.message }
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
