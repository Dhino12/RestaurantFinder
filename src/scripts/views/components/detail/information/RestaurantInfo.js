import html from './information.html';

class RestaurantInfo extends HTMLElement {
    #restaurant = {};

    set _setInformationRestaurant(information) {
        this.#restaurant = information;

        this.render();
    }

    render() {
        this.innerHTML = html;
        let li = '';

        const { city, address, categories } = this.#restaurant;

        this.querySelector('#address').innerText = address;
        this.querySelector('#city').innerText = city;

        categories.forEach((categorie) => {
            li += `<li>${categorie.name}</li>`;
        });

        this.querySelector('article ul').innerHTML = li;
    }
}

customElements.define('aside-info', RestaurantInfo);
