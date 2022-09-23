import html from './item.html';

class ItemRestaurant extends HTMLElement {
    #restaurant = {};

    set _dataRestaurant(data) {
        this.#restaurant = data;
        this.render();
    }

    connectedCallback() {
        this.classList.add('card');
    }

    render() {
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
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

        this.querySelector('img').src = `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`;
        this.querySelector('img').alt = `gambar restaurant ${name}`;
        this.querySelector('.city').innerText = city;
        this.querySelector('h2').innerText = name;
        this.querySelector('#desc').innerText = trimmedString;
        this.querySelector('#rating').innerText = `Rating: ${rating}/5.0`;

        this.querySelector('a').href = `/#/detail/${id}`;
    }
}

customElements.define('item-restaurant', ItemRestaurant);
