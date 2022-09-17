import html from './content.html'

class ContentPopular extends HTMLElement {
    connectedCallback(){
        this.classList.add('container');
        this.render();
    }

    render() {
        this.innerHTML = html;
    }
}

customElements.define('content-popular', ContentPopular);