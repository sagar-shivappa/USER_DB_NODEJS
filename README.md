# NodeJS: User Management API

## Project Overview

This project outlines the development of a RESTful API using Express.js and MongoDB to manage user data. The API allows users to be created and retrieved from a MongoDB database.

## Project Goal

The goal is to create a simple and efficient API that allows the client to:

- Add new users to the system.
- Retrieve a list of all users.

## Provided Components

- **User Model (`models/userModel.js`)**: This file defines the Mongoose schema for the User model, including properties like `name`, `email`, and `age`.
- **Express.js Application**: A basic Express.js application structure is provided, including essential dependencies and project setup.

> Note: You are not required to modify any existing code outside the `routes` folder.

## Implementation Tasks

### [routes/userRoutes.js](routes/userRoutes.js):

Define routes and add logic for the following API endpoints:

- **`/users`**:
  - **GET**: Retrieves all users from the MongoDB collection.
  - **POST**: Creates a new user and adds them to the MongoDB collection based on data from request body.

## API Endpoints

  ### 1. Create a New User (`POST /api/users`)
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
    ```
  - **Response** (on success):
      - Status Code: `201 Created`
      - Example Body:  
        ```json
        {
          "_id": "60c72b2f7a833e4f8c0b9b91",
          "name": "John Doe",
          "email": "john@example.com",
          "age": 30,
          "__v": 0
        }
        ```
  - **Response** (on failure):
      - Status Code: `400 Bad Request`
      - Body:
        ```json
        { "message": err.message }
        ```
  ### 2. Get All Users (`GET /api/users`)
  - **Response** (on success):
      - Status Code: `200 OK`
      - Example Body:  
        ```json
        [
          {
            "_id": "60c72b2f7a833e4f8c0b9b91",
            "name": "John Doe",
            "email": "john@example.com",
            "age": 30,
            "__v": 0
          },
          {
            "_id": "60c72b2f7a833e4f8c0b9b92",
            "name": "Jane Doe",
            "email": "jane@example.com",
            "age": 25,
            "__v": 0
          }
        ]
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
- Once the server is started, navigate to the Thunder Client's tab  ![Thunder client's tab](https://media-doselect.s3.amazonaws.com/generic/ryM78VN71g10k2dKr9K2wGYwo/ThunderClientLogo.png) and click on `New Request`.
- Test the API endpoints by sending specific requests to http://localhost:8000/api/{endpoints}. You can view the JSON response in the "Response" tab.

 ### Run Test Cases: 
 ```bash
 npm test
 ```
 This will run the test cases in the terminal.

>These commands can be executed in the terminal or by selecting the options from the `Run` menu.

## Environment 

- Node Version: 14.21.3
- MongoDB Version: 7.0.3
- Default Port: 8000
# USER_DB_NODEJS
