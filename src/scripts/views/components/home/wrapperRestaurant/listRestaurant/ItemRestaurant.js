import html from './item.html';
import htmlLoading from './loadingSkleton.html';

class ItemRestaurant extends HTMLElement {
    #restaurant = {};

    set _dataRestaurant(data) {
        this.#restaurant = data;
        this.render();
    }

    connectedCallback() {
        this.classList.add('card');
        this.render();
    }

    render() {
        if (this.#restaurant.id === undefined) {
            this.innerHTML = htmlLoading;
            return;
        }

        this.innerHTML = html;

        const {
            pictureId,
            city,
            name,
            description,
            rating,
            id,
        } = this.#restaurant;
        let trimmedString = description.substr(0, 120);
        const IMAGE_RESTAURANT = `https://restaurant-api.dicoding.dev/images/small/${pictureId}`;
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

        // diharapkan testing menggunakan development
        if (process.env.NODE_ENV !== 'development') {
                // atau ini dimatikan
            this.querySelector('img').setAttribute('data-src', IMAGE_RESTAURANT);
            this.querySelector('img').classList.add('lazyload');
        } else {
            this.querySelector('img').src = IMAGE_RESTAURANT;
        }
        this.querySelector('img').alt = `gambar restaurant ${name}`;
        this.querySelector('.city').innerText = city;
        this.querySelector('h2').innerText = name;
        this.querySelector('#desc').innerText = trimmedString;
        this.querySelector('#rating').innerText = `Rating: ${rating}/5.0`;

        this.querySelector('a').href = `/#/detail/${id}`;
    }
}

customElements.define('item-restaurant', ItemRestaurant);
