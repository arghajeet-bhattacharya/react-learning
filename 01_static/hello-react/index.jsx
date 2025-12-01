import { createRoot } from 'react-dom/client';

//create root
const reactRoot = createRoot(document.getElementById('react-root'));
const reactElement = <h1>This is sparta</h1>;

console.log('reactElement: ', reactElement)

//render some markup to root
reactRoot.render(reactElement);

//composible