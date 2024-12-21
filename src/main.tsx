import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalculatorApp } from './CalculatorApp.tsx'
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/700.css';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculatorApp />
  </StrictMode>,
)
