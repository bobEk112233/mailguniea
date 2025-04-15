
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simplified rendering logic
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found in the DOM");
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h3>Error: Root element not found</h3>
      <p>Please refresh the page or try again later.</p>
    </div>
  `;
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(<App />);
    console.log("React application rendered successfully");
    
    // Hide the initial loader if it exists
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  } catch (error) {
    console.error("Failed to render React application:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; max-width: 600px; margin: 0 auto; text-align: center;">
        <h3>React Application Error</h3>
        <p>There was a problem loading the application.</p>
        <button onclick="window.location.reload()" style="padding: 8px 16px; background: #FFA94D; border: none; border-radius: 4px; color: white; cursor: pointer; margin-top: 20px;">
          Reload Page
        </button>
      </div>
    `;
  }
}
