import html from './jumbotron.html';

class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;
    }
}

customElements.define('jumbotron-wrapper', Jumbotron);
