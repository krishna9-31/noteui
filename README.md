# 📝 Simple Notes App with Tags & Search

A full-stack Notes Management application built using **React.js** for the frontend and **Node.js** for the backend. The application allows users to create, view, search, and delete personal notes with optional tags, providing a clean and responsive interface for organizing information.

## 🚀 Live Demo

**Frontend:** https://noteui-gold.vercel.app/

## 📂 GitHub Repositories

**Frontend Repository:** https://github.com/krishna9-31/noteui

**Backend Repository:** https://github.com/krishna9-31/noteserver

---

# 📖 Project Overview

This project was developed as part of a **Full Stack Internship Assignment**. The objective was to build a web application where users can manage personal notes with support for tags and search functionality.

The application follows a client-server architecture where the React frontend communicates with the Node.js backend through REST APIs.

---

# ✨ Features

### Frontend

* Display all notes in a clean card layout
* Create new notes
* Add title and content
* Add optional tags (e.g., `work`, `personal`)
* Delete notes
* Search notes by title
* Filter notes using tags
* Responsive user interface
* API communication using Axios
* State management using React Hooks

### Backend

REST APIs include:

* **GET /notes** – Retrieve all notes or filter using search query/tag
* **POST /notes** – Create a new note
* **DELETE /notes/:id** – Delete an existing note

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Axios
* HTML5
* CSS3

## Backend

* Node.js
* Express.js

## Database

* JSON file / Local data storage (depending on your implementation)

---

# 📁 Project Structure

## Frontend

```text
noteui/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

## Backend

```text
noteserver/
│
├── routes/
├── controllers/
├── models/
├── server.js
├── package.json
└── README.md
```

---

# 📦 Installation

## Clone the repositories

### Frontend

```bash
git clone https://github.com/krishna9-31/noteui.git
```

### Backend

```bash
git clone https://github.com/krishna9-31/noteserver.git
```

---

## Install Dependencies

### Frontend

```bash
cd noteui
npm install
npm start
```

### Backend

```bash
cd noteserver
npm install
npm start
```

---

# 🔗 API Endpoints

## Get All Notes

```text
GET /notes
```

## Create Note

```http
POST /notes
```

Example Request Body

```json
{
  "title": "Meeting Notes",
  "content": "Prepare project presentation",
  "tags": ["work", "meeting"]
}
```

## Delete Note

```http
DELETE /notes/:id
```

---

# 📋 Note Model

```json
{
  "id": 1,
  "title": "Sample Note",
  "content": "This is a sample note.",
  "tags": ["personal"],
  "createdAt": "2026-01-01T10:00:00Z"
}
```

---

# 🌟 Future Improvements

* Edit existing notes
* User authentication (Login & Signup)
* MongoDB database integration
* Markdown support
* Tag autocomplete
* Dark mode
* Pagination
* User-specific notes

---

# 📚 Learning Outcomes

Through this project, I gained practical experience with:

* React Hooks
* REST API development
* Axios for API communication
* Express.js backend development
* Component-based architecture
* State management
* CRUD operations
* Frontend and backend integration

---

# 👨‍💻 Author

**Krishna Chaitanya**

GitHub: https://github.com/krishna9-31

---

⭐ If you found this project useful, consider giving it a star on GitHub.
