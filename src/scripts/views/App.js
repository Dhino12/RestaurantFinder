import DrawerInitiator from '../utils/DrawerInitiator';
import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
         });
    }

    async renderPage() {
        const url = UrlParser.parseActiveWithCombiner();
        const page = Routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElem = document.querySelector('.skip');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
            console.log('jalan');
        });
    }
}

export default App;

// export default main;
