import { createRoot } from 'react-dom/client'

const reactRoot = createRoot(document.getElementById('react-root'));

reactRoot.render(
    <main>
        <img src='/assets/react-logo.png' width='40px' alt='React logo'></img>
        <h1>Trekking WishList</h1>
        <ul>
            <li>Annapurna Circuit</li>
            <li>Auden Col</li>
            <li>Pin Parvati</li>
        </ul>
    </main>
)



