import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayOut } from './pages/layout.tsx'

import { User } from './pages/user.tsx'
import { UserList } from './pages/user-list.tsx'
import { AddUser } from './pages/add-user.tsx'


export const router = createBrowserRouter([
  {
    path:"",
    element:<LayOut/>,
    children:[
      {path:"",element:<UserList/>},
      {path:"add" , element:<AddUser/>},
      {path:"user/:id",element:<User/>}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
