# ChatApp

Welcome to ChatApp! This is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.io for enabling real-time communication. With ChatApp, users can create accounts and engage in instant messaging with others in real-time.

<img src="https://github.com/enmanuelsabarua/chat-app/assets/88289379/ef24a24a-3455-411c-a9c5-7e56a8ac3429" alt="drawing" style="width:450px;"/>
<img src="https://github.com/enmanuelsabarua/chat-app/assets/88289379/437b4545-0c77-4e99-8c0a-a02666aa164c" alt="drawing" style="width:450px;"/>

## Features

1. **User Authentication**: Users can create accounts securely using email and password authentication. Once logged in, they can access the chat features.

2. **Real-time Chatting**: ChatApp enables real-time messaging between users. Messages are delivered instantly, providing a seamless communication experience.

3. **User Presence**: Users can see the online status of other users. This feature enhances the user experience by indicating who is currently active.

4. **Message History**: ChatApp stores chat history, allowing users to view past conversations.

## Technologies Used

- **MongoDB**: MongoDB is used as the database to store user information, chat messages, and other application data.

- **Express.js**: Express.js is used as the backend framework to handle HTTP requests and routes.

- **React.js**: React.js is used for building the user interface of the application. It provides a responsive and interactive front-end experience.

- **Node.js**: Node.js is used as the server-side runtime environment for running JavaScript code.

- **Socket.io**: Socket.io enables real-time, bidirectional communication between clients and the server. It facilitates instant messaging functionality in ChatApp.

## Installation

To run ChatApp locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd chatapp`
3. Install dependencies for both client and server:
   - For the server, run `npm install`
   - For the client, run `cd frontend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     - `MONGODB_URI`: MongoDB connection URI
     - `JWT_SECRET`: Secret key for JWT token generation
     - `PORT`: Port number for the server
     - `NODE_ENV`: Environment (development/production)
5. Start the server: `npm start` in the root directory
6. Start the client: `npm run dev` in the client directory
7. Access ChatApp in your browser at `http://localhost:5173`

## Usage

1. **Sign Up/Login**: Create a new account or login using existing credentials.
2. **Chat**: Once logged in, you can start chatting with other users who are online.
3. **View Chat History**: Access chat history to view previous conversations.
4. **Logout**: Logout from your account when done.

## Deployment

The app is deployed on Render. You can access the live application [here](https://chat-app-dg2j.onrender.com/).

Thank you for using ChatApp! We hope you enjoy seamless real-time communication with your friends and colleagues.
