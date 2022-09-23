import html from './notfound.html';

class NotFound extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;
    }
}

customElements.define('not-found', NotFound);
