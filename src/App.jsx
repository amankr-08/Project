import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './components/Dashboard'
import Help from './components/comp pages/Help'
import ProtectedRoute from './privaterouting/ProtectedRoute'

// Import CreateUser and Steps
import CreateUser from './components/comp pages/CreateUser'
import Step1 from './components/comp pages/Step1'
import Step2 from './components/comp pages/Step2'
import Step3 from './components/comp pages/Step3'

import AllUsers from './components/comp pages/AllUsers'
import EditUser from './components/EditUser'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/services", element: <Services /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/dashboard",
          element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
          children: [
            {
              path: "/dashboard/createusers",
              element: <CreateUser />,  // acts as layout for steps
              children: [
                { path: "step1", element: <Step1 /> },
                { path: "step2", element: <Step2 /> },
                { path: "step3", element: <Step3 /> },
              ]
            },
            { path: "/dashboard/help", element: <Help /> },
            { path: "/dashboard/allusers", element: <AllUsers /> },
          ],
        },
        {
          path: "/edituser/:slug",
          element: <ProtectedRoute><EditUser /></ProtectedRoute>
        }
      ],
    },
  ])

  return <RouterProvider router={routes} />
}

export default App
