import './ReviewItem';
import './ReviewForm';
import html from './review.html';

class Review extends HTMLElement {
    #reviews = [];

    #callback = () => {};

    #buttonShowMore = null;

    set _setCustomerReview(reviews) {
        this.#reviews = reviews;
        this.#buttonShowMore = this.querySelector('#expandReview');
        console.log('button-expand =>', this.#buttonShowMore);
        this.render();
    }

    connectedCallback() {
        this.classList.add('review');
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

        // eslint-disable-next-line consistent-return
        this.#reviews.forEach((review, index) => {
            if (index >= 3 && this.#buttonShowMore == null) {
                this.#buttonExpandReview();
                console.log('masuk if');

                return false;
            }

            reviewItem = document.createElement('article-review');
            reviewItem._setReviewData = review;

            this.appendChild(reviewItem);
        });

        console.log('kluar for');
        const formReview = document.createElement('review-form');
        this.appendChild(formReview);
    }
}

customElements.define('review-list', Review);
