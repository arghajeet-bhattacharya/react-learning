import { createRoot } from 'react-dom/client';
import App from './App2';

const reactRoot = createRoot(document.getElementById('react-root'));

reactRoot.render(<App />)