import html from './footer.html';

class FooterWrapper extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render () {
        this.innerHTML = html;
    }
}

customElements.define('footer-wrapper', FooterWrapper);