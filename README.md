# Echo Articles 📝

Echo Articles is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog platform where users can create, edit, delete, and view articles. It includes authentication and authorization functionality, as well as public access for reading posts. Visitors can also search for articles by title or category.

---

## 🔗 Live Demo & Video Walkthrough

🎥 **[Watch the Demo Video](https://drive.google.com/file/d/1gjDqtQgCdCmX0goVDcciRd8K3LBBdbfy/view?usp=sharing)**

---

## 🚀 Features

- 🔒 **Authentication & Authorization**  
  Secure registration and login with JWT. Only authenticated users can manage their own articles.

- 📝 **CRUD for Posts**  
  Create, update, and delete your own articles.

- 🌍 **Public Article Access**  
  All posts are visible to everyone — even unauthenticated users.

- 🔍 **Search and Filter**  
  Search by title and filter posts by category.

- 📄 **Pagination**  
  Articles are paginated for better readability and performance.

- 🙍‍♂️ **User Profile Pages**  
  View a user's profile and browse their articles.

- 🎨 **Responsive Design**  
  Clean and responsive UI built with React.

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- Axios
- React Router DOM
- Dasiy UI
- TailwindCSS

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- bcrypt.js

---

## 📂 Project Structure

```bash
Echo-Articles/
├── public/              # Public assets for Vite
├── server/              # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── src/                 # React frontend source
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── ...
├── utils/               # Shared utility functions
│   └── helper.js
├── index.html           # HTML entry (Vite)
├── vite.config.js       # Vite configuration
├── .gitignore
├── package.json
└── README.md
```

## 📦 Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/echo-articles.git
cd echo-articles
```

### Install dependencies:

**Backend:**

```bash
cd server
npm install
```

**Frontend:**

```bash
cd ../client
npm install
```

### Configure environment variables:

Create a .env file in the server/ directory with the following content:

env

```bash
MONGO_SECRET=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=time_should_the_token_expire_at
NODE_ENV=production_or_local
```

Run the application:

**Backend:**

```bash
cd server
nodemon app
```

**Frontend:**

```bash
cd client
npm run dev
```

## ⭐ Future Improvements

- Rich text editor for article creation
- Commenting system
- Dark mode toggle
