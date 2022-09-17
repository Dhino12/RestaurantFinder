import html from './item.html'

class ItemRestaurant extends HTMLElement {

    #restaurant = {};

    set _dataRestaurant(data) {
        this.#restaurant = data;
        this.render();
    }

    connectedCallback() {
        this.classList.add('card');
    }

    render () {
        this.innerHTML = html;

        let {pictureId, city, name, description, rating} = this.#restaurant;
        var trimmedString = description.substr(0, 120);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

        
        this.querySelector('img').src = pictureId;
        this.querySelector('img').alt = `gambar restaurant ${name}`;
        this.querySelector('.city').innerText = city;
        this.querySelector('h2').innerText = name;
        this.querySelector('#desc').innerText = trimmedString;
        this.querySelector('#rating').innerText = `Rating: ${rating}/5.0`;
    }
}

customElements.define('item-restaurant', ItemRestaurant);