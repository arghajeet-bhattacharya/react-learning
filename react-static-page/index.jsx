import { createRoot } from 'react-dom/client'

const reactRoot = createRoot(document.getElementById('react-root'));

reactRoot.render(<ReactFactCompoment />);

function MainComponent() {
    return (
        <main>
            <img src='/assets/react-logo.png' width='40px' alt='React logo'></img>
            <h1>Trekking WishList</h1>
            <ol>
                <li>Annapurna Circuit</li>
                <li>Auden Col</li>
                <li>Pin Parvati</li>
                <li>Panpatia Col</li>
            </ol>
        </main>
    )
}

function ReactFactCompoment() {
    return (
        <div>
            <header>
                <img src='/assets/react-logo.png' width='40px' alt='React logo'></img>
            </header>
            <main>
                <h1>Why I am learning react</h1>
                <ol>
                    <li>Get out of my comfort zone</li>
                    <li>Make more money</li>
                </ol>
            </main>
            <footer>
                <small>2025 Arghajeet. All rights reserved</small>
            </footer>
        </div>

    )
}



