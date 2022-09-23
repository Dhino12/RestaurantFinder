import html from './review-item.html';

class ReviewItem extends HTMLElement {
    #review = {};

    set _setReviewData(review) {
        this.#review = review;

        this.render();
    }

    render() {
        this.innerHTML = html;

        this.querySelector('.content h2').innerText = this.#review.name;
        this.querySelector('.date').innerText = this.#review.date;
        this.querySelector('.review').innerText = this.#review.review;
    }
}

customElements.define('article-review', ReviewItem);
