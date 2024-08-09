import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.jsx'
// import App1 from './App1.jsx'
// import App2 from './App2.jsx'
// import App3 from './App3.jsx'
import App4 from './App4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    <App4/>
  </StrictMode>,
)
