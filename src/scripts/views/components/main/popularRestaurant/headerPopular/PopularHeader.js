import html from './popular-header.html';

class PopularHeader extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;   
    }
}

customElements.define('popular-header', PopularHeader);