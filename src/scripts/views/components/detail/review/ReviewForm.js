import html from './review-form.html';

class ReviewForm extends HTMLElement {
    #eventSend = null;

    connectedCallback() {
        this.render();
    }

    set _onSendReview(eventSend) {
        this.#eventSend = eventSend;
        this.render();
    }

    render() {
        this.innerHTML = html;
        if (this.#eventSend !== null) {
            this.querySelector('#form-review').addEventListener('submit', this.#eventSend);
        }
    }
}

customElements.define('review-form', ReviewForm);
