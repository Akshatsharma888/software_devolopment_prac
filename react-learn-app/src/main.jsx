import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App_1 from './App.jsx'
// import App2  from './App2.jsx'
// import App3 from './App3';
// import App4 from './App4';
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import Github from './Components/Github/Github';
import { githubInfo } from './Components/Github/api';

// import App5 from './App5';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path:'about',
//         element: <About/>
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
        path='github' 
        element={<Github/>}
        loader={githubInfo}
      />
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App_1 /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    {/* <App5/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)