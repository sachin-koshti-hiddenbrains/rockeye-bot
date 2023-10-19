import React from 'react'
import ReactDOM from 'react-dom/client'
import HbBot from './App'
const containerId = config.appConfig.containerId
              ? config.appConfig.containerId
              : "chatBot-Box";

            const Div = document.createElement("div");
            Div.id = containerId
            Div.className = "hb-common-chatbot"
            document.body.appendChild(Div);
            //const container = document.getElementById(containerId);
            //const root = ReactDOM.createRoot(container);
            
ReactDOM.createRoot(document.getElementById(containerId)).render(
  <React.StrictMode>
    <HbBot />
  </React.StrictMode>,
)
