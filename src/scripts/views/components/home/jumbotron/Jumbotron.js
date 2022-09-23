import html from './jumbotron.html';
import jumbotronDetail from './jumbotron-detail.html';

class Jumbotron extends HTMLElement {
    #restaurant = '';

    connectedCallback() {
        this.render();
    }

    set _dataNameRestauarant(restaurant) {
        this.#restaurant = restaurant;
        this.render();
    }

    render() {
        if (this.#restaurant) {
            this.querySelector('.jumbotron').id = 'jumbotron-detail';
            this.innerHTML = jumbotronDetail;

            this.querySelector('h1').innerText = this.#restaurant.name;
            this.querySelector('img').src = `https://restaurant-api.dicoding.dev/images/medium/${this.#restaurant.pictureId}`;
            this.querySelector('.rating p').innerText = `⭐️ : ${this.#restaurant.rating}`;
        } else {
            this.innerHTML = html;
        }
    }
}

customElements.define('jumbotron-wrapper', Jumbotron);
