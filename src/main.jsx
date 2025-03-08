import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { ChakraProvider } from "@chakra-ui/react";

function AppWrapper() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

export default AppWrapper;
