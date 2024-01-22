import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPages from './pages/MainPages.jsx'
import Video from './pages/TikVid.jsx'
import Image from './pages/TikImg.jsx'
import Audio from './pages/TikAud.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages/>
  },
  {
    path: "/video",
    element: <Video/>
  },
  {
    path: "/image",
    element: <Image/>
  },
  {
    path: "/audio",
    element: <Audio/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
