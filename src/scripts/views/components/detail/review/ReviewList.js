import './ReviewItem';
import './ReviewForm';
import html from './review.html';

class Review extends HTMLElement {
    #reviews = [];

    #buttonShowMore = null;

    set _setCustomerReview(reviews) {
        this.#reviews = reviews;
        this.#buttonShowMore = this.querySelector('#expandReview');
        this.render();
    }

    connectedCallback() {
        this.classList.add('review');

        this.#buttonShowMore = this.querySelector('#expandReview');
    }

    #buttonExpandReview() {
        this.#buttonShowMore = document.createElement('button');
        this.#buttonShowMore.innerText = 'Lihat review lainnya..';
        this.#buttonShowMore.id = 'expandReview';
        this.appendChild(this.#buttonShowMore);
    }

    render() {
        let reviewItem;
        this.innerHTML = html;

        this.#reviews.every((review, index) => {
            if (index >= 3 && this.#buttonShowMore == null) {
                this.#buttonExpandReview();
                return false;
            }

            reviewItem = document.createElement('article-review');
            reviewItem._setReviewData = review;

            this.appendChild(reviewItem);
            return true;
        });

        const formReview = document.createElement('review-form');
        this.appendChild(formReview);
    }
}

customElements.define('review-list', Review);
