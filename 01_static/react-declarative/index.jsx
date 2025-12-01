import { createRoot } from 'react-dom/client'

// const reactRoot = createRoot(document.getElementById('react-root'));

// reactRoot.render(
//     <h2 className='header'>This is Athens</h2>
// )

const h1 = document.createElement('h2');

h1.textContent = 'This is Sparta';
h1.className = 'header';
document.getElementById('react-root').appendChild(h1);
