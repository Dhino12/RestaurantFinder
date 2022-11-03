import './ReviewItem';
import './ReviewForm';
import html from './review.html';

class Review extends HTMLElement {
    #reviews = [];

    #buttonShowMore = null;

    set _setCustomerReview(reviews) {
        this.#buttonShowMore = this.querySelector('#expandReview');

        if (this.#buttonShowMore !== null) {
            this.#reviews = reviews;
        } else {
            this.#reviews = reviews.filter((review, index) => index < 3);
        }
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
        return this.#buttonShowMore;
    }

    render() {
        let reviewItem;
        this.innerHTML = html;
        const divEl = this.querySelector('div');

        // eslint-disable-next-line consistent-return
        this.#reviews.forEach((review) => {
            reviewItem = document.createElement('article-review');
            reviewItem._setReviewData = review;

            divEl.appendChild(reviewItem);
        });

        divEl.append(this.#buttonExpandReview());
    }
}

customElements.define('review-list', Review);
