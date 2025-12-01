import { createRoot } from 'react-dom/client'

const reactRoot = createRoot(document.getElementById('react-root'));

reactRoot.render(
    <main>
        <img src='/assets/react-logo.png'></img>
        <h1>This is Sparta</h1>
    </main>
)

// reactRoot.render(
//     <img src='/assets/react-logo.png'></img>
// )


