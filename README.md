Real-Time Chat Application
A modern real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO for real-time communication.

Features
🔐 User authentication (signup/login)
💬 Real-time messaging
🌅 Image sharing in chats
🔵 Online user status
👤 User profiles with avatar support
🎨 Multiple theme options
💫 Modern UI with DaisyUI and Tailwind CSS
🔒 Secure authentication with JWT
📱 Responsive design


Tech Stack

Backend
Node.js
Express.js
MongoDB with Mongoose
Socket.IO
JWT for authentication
Cloudinary for image storage
bcrypt for password hashing


Frontend
React
Vite
Zustand for state management
Tailwind CSS
DaisyUI for UI components
Socket.IO Client
React Router v7
Axios for API calls


Getting Started
Clone the repository:
Install dependencies:


Set up environment variables:
Create .env file in the backend directory:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Run development servers:
This will start both frontend and backend servers concurrently:

Frontend: http://localhost:5173
Backend: http://localhost:5000
Scripts

npm run dev - Start development servers
npm run build - Build for production
npm start - Start production server
npm run install-all - Install dependencies for all packages

