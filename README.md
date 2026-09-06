<div align="center">
<img src="./assets/logo.png" alt="Snap Feed Banner" width="100%">
<br>

<a href="https://snap-feed-gules.vercel.app/feed">
  <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-VISIT_APP-6C63FF?style=for-the-badge" alt="Live Demo">
</a>

<br><br>


</div>

<div align="center">

<a href="https://react.dev/">
<img src="https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</a>

<a href="https://axios-http.com/">
<img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
</a>

<br><br>

<a href="https://nodejs.org/">
<img src="https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
</a>

<a href="https://expressjs.com/">
<img src="https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
</a>

<a href="https://www.mongodb.com/">
<img src="https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</a>

<a href="https://mongoosejs.com/">
<img src="https://img.shields.io/badge/MONGOOSE-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
</a>

<br><br>

<a href="https://imagekit.io/">
<img src="https://img.shields.io/badge/IMAGEKIT.IO-FF6B35?style=for-the-badge" alt="ImageKit.io"/>
</a>

<a href="https://vercel.com/">
<img src="https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
</a>

<a href="https://render.com/">
<img src="https://img.shields.io/badge/RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render"/>
</a>

</div>


## 📌 About The Project

**Snap Feed** is a full-stack image sharing web application built using the **MERN Stack**.

Users can upload, view, and manage images through a clean and responsive interface. **ImageKit.io** is used for cloud image optimization and delivery, while **MongoDB** stores image metadata.

The project demonstrates a complete client-server architecture with a React frontend, Node.js and Express backend, MongoDB database, and cloud-based image storage.

---

## ✨ Features

- 📤 **Upload Images**
  - Upload images using ImageKit.io.

- 🖼️ **Responsive Image Feed**
  - View uploaded images in a clean and responsive feed.

- 🗄️ **MongoDB Storage**
  - Store image metadata securely in MongoDB.

- ⚡ **RESTful API**
  - Backend APIs built using Express.js.

- 📱 **Responsive Frontend**
  - React-based interface designed for different screen sizes.

- ☁️ **Cloud Image Delivery**
  - ImageKit.io handles image storage, optimization, and delivery.

- 🌐 **Vercel Deployment**
  - Frontend deployed on Vercel.

- 🖥️ **Render Deployment**
  - Backend deployed on Render.

---

## 🖥️ How It Works

```text
                    👤 User
                      │
                      ▼
             ┌─────────────────┐
             │ React Frontend  │
             └────────┬────────┘
                      │
                      │ Axios
                      ▼
             ┌─────────────────┐
             │ Express Backend │
             └────────┬────────┘
                      │
                ┌─────┴─────┐
                │           │
                ▼           ▼
        ┌────────────┐ ┌──────────────┐
        │  MongoDB   │ │  ImageKit.io │
        │            │ │              │
        │  Metadata  │ │    Images    │
        └────────────┘ └──────────────┘
Workflow
User selects an image.
Image is uploaded through the application.
ImageKit.io handles cloud image storage and optimization.
Image information is sent to the backend.
Express.js processes the request.
MongoDB stores the image metadata.
The image becomes available in the Snap Feed.
📂 Project Structure
Snap_feed/
│
├── Snap_feed-client/          # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Snap_feed-server/          # Node.js + Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── package.json
│   └── ...
│
├── assets/
│   └── banner.png
│
└── README.md
🚀 Getting Started

Follow these steps to run Snap Feed locally.

1. Clone the Repository
git clone https://github.com/Anand-1081/Snap_feed.git
cd Snap_feed
💻 Run Frontend

Navigate to the frontend directory:

cd Snap_feed-client

Install dependencies:

npm install

Start the development server:

npm run dev
🖥️ Run Backend

Open another terminal and navigate to the backend:

cd Snap_feed-server

Install dependencies:

npm install

Start the backend:

npm start
🔑 Environment Variables

Create a .env file inside the Snap_feed-server directory.

PORT=5000

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=your_url_endpoint

⚠️ Never commit your .env file or expose your private API keys.

🌐 Deployment

The project uses separate deployment platforms for the frontend and backend.

Frontend

Vercel

The React frontend is deployed on Vercel.

Backend

Render

The Node.js and Express backend is deployed on Render.

Image Storage

ImageKit.io

Images are stored, optimized, and delivered through ImageKit.io.

🔗 Live Application
<div align="center"> <a href="https://snap-feed-gules.vercel.app/feed"> <img src="https://img.shields.io/badge/🚀_OPEN_SNAP_FEED-6C63FF?style=for-the-badge" alt="Open Snap Feed"> </a> </div>
📸 Screenshots
🏠 Feed Page
<img width="1901" height="921" alt="Snap Feed Feed Page" src="https://github.com/user-attachments/assets/ecaa734c-b901-4bec-a44d-d0ea67dd94a3" />
📤 Image Upload Page
<img width="1917" height="921" alt="Snap Feed Image Upload Page" src="https://github.com/user-attachments/assets/d1a1b9c0-5ff7-4a94-a336-0847094af845" />
🎯 Project Goals

The goal of Snap Feed is to provide a simple and efficient platform for sharing images.

The project focuses on building a complete full-stack application where users can upload images, store their metadata, and access optimized images through a cloud-based media service.

Upload. Share. Explore.
🎓 Learning Outcomes

This project provided hands-on experience with:

⚛️ React component-based development
🟢 Node.js backend development
🚂 Express.js REST API development
🍃 MongoDB database integration
📦 Mongoose data modeling
☁️ ImageKit cloud image storage
🔗 Frontend-backend API communication
📡 Axios
📱 Responsive web development
🚀 Full-stack deployment
☁️ Cloud-based application architecture
🔮 Future Improvements
🔐 User Authentication with JWT
❤️ Like & Comment System
🔎 Image Search
👤 User Profiles
♾️ Infinite Scrolling
📤 Drag & Drop Upload
🏷️ Image Categories
🔔 Notifications
🌙 Dark Mode
📊 User Activity Dashboard
🤝 Contributing

Contributions are welcome!

1. Fork the Repository

Fork this repository to your GitHub account.

2. Create a Feature Branch
git checkout -b feature/your-feature
3. Make Your Changes

Implement your feature or fix.

4. Commit Your Changes
git add .
git commit -m "Add new feature"
5. Push Your Branch
git push origin feature/your-feature
6. Create a Pull Request

Open a Pull Request and describe your changes.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author
<div align="center">
Anand Jha
Full-Stack Developer | MERN Stack

Building projects to learn, experiment, and solve real-world problems.

</div>
⭐ Support

If you found Snap Feed helpful, consider giving the repository a ⭐ Star on GitHub.

<div align="center">
📱 Snap Feed

Upload • Share • Explore

⭐ Star the repository if you like it!

</div> ```