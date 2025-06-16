# React Vite User Management Application

This project is a user management application built using **React** with **Vite** and a mock backend powered by **JSON Server**.

## 🚀 Getting Started

Follow the steps below to run the project on your local machine.

### 1. Download the Project

- Download the ZIP file of the project.
- Extract it and open the folder in **Visual Studio Code** or any IDE that supports a React + Vite environment.

### 2. Install Dependencies

In the project directory, open the terminal and run:
npm install

### 3. To run the React application:
npm run dev

This will launch the app in your browser (usually at http://localhost:5173/).

### 4. To run the mock backend using JSON Server:
-Run this in another terminal:
npx json-server --watch backend/db.json --port 3000

This will start the backend API at http://localhost:3000/.

🧑‍💻 How to Use the Application
================================

1. Register
Navigate to the Sign Up page.
Fill in the registration form.
The data will be stored in your browser's localStorage.

2. Login
Use your registered credentials to log in.
After a successful login, you will be redirected to the All Users page.

3. Create a Profile
Click on the "Create User" button in the left sidebar.
Complete the 3-step profile creation form.
Upon submission, the data will be stored in the backend (JSON Server).

4. View All Users
All user profiles are displayed on the All Users page.
You can Edit or Delete user profiles directly from this page.




