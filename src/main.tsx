
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling to catch React rendering errors
try {
  console.log("Attempting to render React application");
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Root element not found in the DOM");
  }
  
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("React application rendered successfully");
} catch (error) {
  console.error("Failed to render React application:", error);
  
  // Display error message to user
  const errorMsg = document.getElementById('error-message');
  if (errorMsg) {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = `
      <h3>React Application Error</h3>
      <p>Error: ${error instanceof Error ? error.message : String(error)}</p>
      <p>Try the following:</p>
      <ul style="text-align: left; display: inline-block;">
        <li>Clear your browser cache</li>
        <li>Try an incognito/private window</li>
        <li>Ensure JavaScript is enabled</li>
      </ul>
      <p><button onclick="window.location.reload()" style="padding: 8px 16px; background: #FFA94D; border: none; border-radius: 4px; color: white; cursor: pointer;">Reload Page</button></p>
    `;
  }
  
  // Hide the initial loader
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}
