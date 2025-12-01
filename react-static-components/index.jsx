import { createRoot } from 'react-dom/client'
import { Fragment } from 'react';
import { HeaderComponent } from './Header';
import { MainContentComponent } from './MainContent';
import { FooterComponent } from './Footer';

const reactRoot = createRoot(document.getElementById('react-root'));



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


