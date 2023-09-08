
# Real Time Social Media App

This project is a real-time social media application that aims to provide users with a seamless and interactive social networking experience. It incorporates various features such as chatting functionality, post interactions, user authentication, friendship connections, user profile management, and integrated real-time chat.

## Features

### Real-time Chatting Functionality

The app is built on the socket.io library, enabling real-time communication between users. Users can send and receive messages instantly, creating a dynamic and engaging chatting experience.

### Post Interactions

Users can create posts, and other users can interact with these posts by liking or disliking them. Additionally, users have the ability to comment on posts, facilitating lively discussions and engagement among users.

### User Authentication

To access the platform's features, users must sign up or log in using their credentials. This ensures a secure and personalized experience for each user.

### Friendship Connections

The app enables users to follow other users and establish friendships. This feature allows users to stay connected with their friends and receive updates on their activities and posts.

### User Profile Management

Users have control over their profiles, where they can update their information and customize their profiles according to their preferences. This adds a personal touch to the user experience.

### Integrated Real-time Chat App

The app incorporates an integrated chat app powered by socket.io. This feature allows users to communicate with their friends in real-time, enhancing the social aspect of the platform.

### Account Deletion Option

Users have the option to delete their accounts if they wish to discontinue using the platform. This provides users with full control over their data and ensures privacy.

## Technologies Used

The Real Time Social Media App is built using the following technologies:

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Styling**: CSS for styling and responsiveness

## Installation

To run the app locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `npm install` in both the client and server directories.
3. Set up a MongoDB database and update the database connection URL in the server's `.env` file.
4. Run the backend server using `npm start` in the server directory.
5. Run the React development server using `npm start` in the client directory.
6. Access the app in your browser at `http://localhost:3000`.

## How to Use

- Sign up or log in to the app using your credentials.
- Create, like, dislike, and comment on posts from other users.
- Follow and befriend other users to stay updated on their posts.
- Use the integrated chat app to communicate with your friends in real-time.
- Manage your profile settings and delete your account if needed.

## Contributing

Contributions are welcome! If you find any bugs or have ideas for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
