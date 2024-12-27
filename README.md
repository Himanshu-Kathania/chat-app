
# 💬 Real-Time Chat Application  

A modern, feature-rich real-time chat application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Socket.IO** for seamless real-time communication.  

---

## ✨ Features  

- **🔐 User Authentication**: Secure signup and login with JWT.  
- **💬 Real-Time Messaging**: Instant messaging powered by Socket.IO.  
- **🌅 Image Sharing**: Share images in chats with Cloudinary integration.  
- **🔵 Online User Status**: See who’s online in real-time.  
- **👤 User Profiles**: Customizable profiles with avatar support.  
- **🎨 Multiple Themes**: Choose from multiple theme options.  
- **💫 Modern UI**: Sleek and responsive design with DaisyUI and Tailwind CSS.  
- **📱 Responsive Design**: Works seamlessly on all devices.  

---

## 🛠️ Tech Stack  

### **Backend**  
- **Node.js**  
- **Express.js**  
- **MongoDB** with Mongoose for database management  
- **Socket.IO** for real-time communication  
- **JWT** for secure authentication  
- **Cloudinary** for image storage  
- **bcrypt** for password hashing  

### **Frontend**  
- **React** for building the user interface  
- **Vite** for fast development and bundling  
- **Zustand** for state management  
- **Tailwind CSS** for styling  
- **DaisyUI** for pre-built UI components  
- **Socket.IO Client** for real-time communication  
- **React Router v7** for routing  
- **Axios** for API calls  

---

## 🚀 Getting Started  

### **Prerequisites**  
- Node.js installed  
- MongoDB Atlas or local MongoDB instance  
- Cloudinary account for image storage  

### **Setup**  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/real-time-chat-app.git  
   cd real-time-chat-app  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm run install-all  
   ```  

3. **Set up environment variables**:  
   Create a `.env` file in the `backend` directory and add the following:  
   ```env  
   PORT=5000  
   MONGODB_URI=your_mongodb_uri  
   JWT_SECRET=your_jwt_secret  
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name  
   CLOUDINARY_API_KEY=your_cloudinary_api_key  
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret  
   ```  

4. **Run the development servers**:  
   ```bash  
   npm run dev  
   ```  
   - Frontend: [http://localhost:5173](http://localhost:5173)  
   - Backend: [http://localhost:5000](http://localhost:5000)  

---

## 📜 Scripts  

- **`npm run dev`**: Start development servers for both frontend and backend.  
- **`npm run build`**: Build the application for production.  
- **`npm start`**: Start the production server.  
- **`npm run install-all`**: Install dependencies for all packages.  

---

## 🌟 Contributing  

Contributions are welcome! Feel free to open an issue or submit a pull request.  

---

## 📄 License  

This project is licensed under the MIT License.  
