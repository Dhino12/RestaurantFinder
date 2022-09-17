/* eslint-disable no-useless-constructor */
import html from './header.html';

class HeaderFloating extends HTMLElement {
    #events;

    constructor() {
        super();
    }

    set _eventExpandNav(event) {
        this.#events = event;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;

        this.querySelector('#expand').addEventListener('click', this.#events);
    }
}

customElements.define('header-floating', HeaderFloating);
