import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

// Fonts
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
