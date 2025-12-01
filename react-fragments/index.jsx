import { createRoot } from 'react-dom/client'
import { Fragment } from 'react';

const reactRoot = createRoot(document.getElementById('react-root'));

function HeaderComponent() {
    return (
        <header className='header'>
            <img src='/assets/react-logo.png' className='nav-logo' alt='React logo'></img>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContentComponent() {
    return (
        <main>
            <h1>Why I am learning react</h1>
            <ol>
                <li>Get out of my comfort zone</li>
                <li>Make more money !!!</li>
            </ol>
        </main>
    )
}

function FooterComponent() {
    return (
        <footer>
            <small>2025 Sparta Pvt Ltd. All rights reserved</small>
        </footer>
    )

}

function ReactFactCompoment() {
    return (
        <Fragment>
            <HeaderComponent />
            <MainContentComponent />
            <FooterComponent />
        </Fragment>
    )
}

reactRoot.render(<ReactFactCompoment />);


