
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Simple error handler for the entire application
if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h3>Error: Root element not found</h3></div>';
} else {
  // Create root and render
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React application mounted successfully');
    
    // Hide loader after successful render
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  } catch (error) {
    console.error('Failed to render React application:', error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h3>Application Error</h3><p>Please try refreshing the page.</p></div>';
  }
}
