import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, About, Contact, User, Github} from './components/index.js'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

import  Layout  from './Layout.jsx'
import { GitLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [{
//       path: '',
//       element: <Home/>
//       }, {
//         path: 'about',
//         element: <About/>
//       }, {
//         path:'contact',
//         element: <Contact/>
//       },]
//   },{}
// ])

// easy approach below
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path ='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:userId' element = {<User/>}/>
      <Route 
          loader={GitLoader}
          path= 'github' 
          element = {<Github/>}/>
       
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
