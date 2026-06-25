import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// for testing

function My(){ // never use lowercase letters
  return(
    <div>
      <h3>
        Hello from main.jsx
      </h3>
    </div>
  )
}



// const React_Element = {
//     type: "a",
//     props: {
//         href: "https://www.robotstxt.org/robotstxt.html",
//         target: "_blank",
//     },
//     children: "Click Me",
// }



// if You want to check where {injected variable} write in this 

const name = "Babar"


const React_Element2 = React.createElement(
  'a',
  {href: "https://www.robotstxt.org/robotstxt.html", target: "_blank"},
  "Click ",
  name,

)


const Element = (
  <a href='https://www.robotstxt.org/robotstxt.html' target='_blank'>
    Click Me
  </a>
)


createRoot(document.getElementById('root'))
.render(

  // <My />,  // if don't add comma it raise error

  // My(),   // Not Recommended

  // <React_Element />,  // it need function not object
  
  // Element,


  // React_Element2,


  <StrictMode>
  <App />
  </StrictMode>,
)
