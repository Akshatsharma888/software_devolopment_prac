import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App_1 from './App.jsx'
// import App2  from './App2.jsx'
import App3 from './App3';
import "./index.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App_1 /> */}
    {/* <App2/> */}
    <App3/>
  </StrictMode>,
)
