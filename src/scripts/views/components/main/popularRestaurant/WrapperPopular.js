import './headerPopular/PopularHeader';
import './contentPopular/ContentPopular';
import html from './wrapper-popular.html';

class WrapperPopular extends HTMLElement {
    #restaurant = {};

    set _setPopular(restaurant) {
        this.#restaurant = restaurant;

        this.render();
    }

    render() {
        this.innerHTML = html;

        this.querySelector('#restaurant-name').innerText = `In the ${this.#restaurant.name} with rating ${this.#restaurant.rating}`;
        this.querySelector('[title="gambar1"]').src = this.#restaurant.menu.food[0].image;
        this.querySelector('[title="gambar2"]').src = this.#restaurant.menu.food[1].image;
        this.querySelector('[title="gambar4"]').src = this.#restaurant.menu.food[3].image;
        this.querySelector('[title="gambar5"]').src = this.#restaurant.menu.food[2].image;

        this.querySelector('[title="gambar1"]').alt = this.#restaurant.menu.food[0].name;
        this.querySelector('[title="gambar2"]').alt = this.#restaurant.menu.food[1].name;
        this.querySelector('[title="gambar4"]').alt = this.#restaurant.menu.food[3].name;
        this.querySelector('[title="gambar5"]').alt = this.#restaurant.menu.food[2].name;
        this.querySelector('.row .content2').style.backgroundImage = `url(${this.#restaurant.menu.food[2].image})`;
    }
}

customElements.define('wrapper-popular', WrapperPopular);
