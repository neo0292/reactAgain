import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Contact from './routes/contact.jsx'

const router = createBrowserRouter([
  { path:'/' ,
    element : <Root />,
    errorElement : <ErrorPage/>,
  
    //for nested routes
  children:[ {
    path:'contacts/:contactId',
    element : <Contact/>,
  }]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
