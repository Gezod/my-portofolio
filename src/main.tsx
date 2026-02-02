import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Import index.css DULU
import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error('Root element not found!')
}