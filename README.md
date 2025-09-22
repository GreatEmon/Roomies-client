# 🏠 RoomX – Find Your Perfect Roommate

RoomX is a full-stack **Roommate Finder Website** that helps individuals connect with compatible roommates based on **location, budget, lifestyle preferences, and interests**.  
Users can create profiles, add listings, browse available rooms, and interact securely—all from a modern, responsive web app.

---

## 🌐 Live Links
- **Frontend (Client):** [https://roomx-ffc76.web.app/](https://roomx-ffc76.web.app/)
- **Backend (Server/API):** [https://rommies-backend.vercel.app/](https://rommies-backend.vercel.app/)

---

## ✨ Key Features
- **🔐 Authentication & Security**
  - Email/password registration & login with **Google Sign-In** support
  - Protected routes for sensitive pages (Add Listing, My Listings, Details, Update)

- **🏘️ Full CRUD Roommate Listings**
  - Add, view, update, and delete roommate-finding posts
  - Fields include title, location, rent, room type, lifestyle preferences, description, contact info, and availability
  - User email & name are auto-attached and read-only

- **💖 Interactive Details Page**
  - “Like” button with live count:  
    `{likeCount} people interested`
  - Contact number only revealed after a like
  - Users can like multiple times **but cannot like their own post**

- **🎨 Modern UI & Extras**
  - Responsive design for **mobile, tablet, and desktop**
  - Dark/Light theme toggle
  - Smooth animations using **Lottie React**, **React-simple-typewriter**, and **React Awesome Reveal**
  - Loading spinners and 404 page for better UX

- **⚡ Performance & Deployment**
  - **Client** deployed on Firebase Hosting  
  - **Server** deployed on Vercel with MongoDB Atlas database
  - Environment variables used for Firebase config and MongoDB credentials (no secrets in code)

---

## 🗂️ Project Structure
roomx/
├─ client/ # React frontend (Vite/CRA)
└─ server/ # Node.js + Express backend


---

## 🧩 Tech Stack
### Frontend
- **React** (React Router, Context API)
- **Tailwind CSS / DaisyUI** for styling
- **Firebase Authentication**
- **Lottie React**, **React-simple-typewriter**, **React Awesome Reveal**, **React-tooltip**

### Backend
- **Node.js + Express**
- **MongoDB Atlas** with Mongoose
- **JWT** for secure API endpoints
- Hosted on **Vercel**

---

## 🚀 Core Pages & Routes
| Route                  | Description                                               |
|------------------------ |-----------------------------------------------------------|
| `/`                     | Home page with banner/slider, featured roommates, extras  |
| `/add-roommate`         | Add new roommate listing (private)                         |
| `/browse-listings`      | View all roommate listings in table format                 |
| `/details/:id`          | Details of a single listing with like & contact reveal     |
| `/my-listings`          | User’s own posts with Update & Delete options (private)    |
| `/update/:id`           | Update a specific listing (private)                        |
| `*`                     | Custom 404 Not Found page                                  |

---

## ⚙️ Environment Variables
Create a `.env` file in both **client** and **server** directories.

## 💻 Local Development
1. **Clone the repos**
   ```bash
   git clone <client-repo-url>
   git clone <server-repo-url>
cd client && npm install
cd ../server && npm install
