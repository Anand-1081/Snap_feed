# 📱 Snap Feed

A full-stack image sharing web application built using the **MERN Stack**. Users can upload, view, and manage images through a clean and responsive interface. The application uses **ImageKit.io** for image optimization and delivery, while image metadata is stored in **MongoDB**.

---

## Live link https://snap-feed-gules.vercel.app/feed



## 📸 Screenshots

```
Feed Page
<img width="1901" height="921" alt="image" src="https://github.com/user-attachments/assets/ecaa734c-b901-4bec-a44d-d0ea67dd94a3" />

Image Upload Page
<img width="1917" height="921" alt="image" src="https://github.com/user-attachments/assets/d1a1b9c0-5ff7-4a94-a336-0847094af845" />

```

## 🚀 Features

- 📤 Upload images using ImageKit.io
- 🖼️ View uploaded images in a responsive feed
- 🗄️ Store image metadata in MongoDB
- ⚡ RESTful API built with Express.js
- 📱 Responsive React frontend
- ☁️ Cloud image optimization and delivery
- 🌐 Client deployed on Vercel
- 🖥️ Backend deployed separately

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- ImageKit.io

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
Snap_feed/
│
├── Snap_feed-client/      # React Frontend
│
├── Snap_feed-server/      # Node.js + Express Backend
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Anand-1081/Snap_feed.git
cd Snap_feed
```

---

### 2. Install Frontend

```bash
cd Snap_feed-client
npm install
npm run dev
```

---

### 3. Install Backend

```bash
cd ../Snap_feed-server
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

- Building REST APIs using Express.js
- React component-based development
- MongoDB database integration
- Cloud image storage using ImageKit.io
- Client-server architecture
- API communication using Axios
- Deploying full-stack applications

---

## 🔮 Future Improvements

- User Authentication (JWT)
- Like & Comment System
- Image Search
- User Profiles
- Infinite Scrolling
- Drag & Drop Upload
- Image Categories

---

## 👨‍💻 Author

**Anand Jha**

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.
