/* eslint-disable no-plusplus */
import './listRestaurant/ListRestaurant';
import html from './wrapper-restaurant.html';

class WrapperRestaurant extends HTMLElement {
    #restaurants = [];

    set _restaurants(restaurants) {
        console.info(restaurants);
        this.#restaurants = restaurants;
        this.render();
    }

    render() {
        this.innerHTML = html;

        const container = this.querySelector('.container');
        let listResEl;
        let count = 0;
        let restaurants = [];

        this.#restaurants.forEach((restaurant, index) => {
            listResEl = document.createElement('list-restaurant');
            restaurants.push(restaurant); // <=== data restaurant

            if (count === 3 || (this.#restaurants.length - 1) === index) {
                // setiap 4 content restaurant akan di append dengan container (wrapperRestaurant)
                    // dengan membawa data, let restaurants = [] dari data yang sudah di push
                listResEl._listRestaurant = restaurants;
                container.appendChild(listResEl);

                count = -1;
                restaurants = [];
            }
            count++;
        });
    }
}

customElements.define('wrapper-restaurant', WrapperRestaurant);
