import './ItemRestaurant';
import html from './ListRestaurant.html';

class ListRestaurant extends HTMLElement {
    
    #listRestaurant = [];

    set _listRestaurant(datas) {
        this.#listRestaurant = datas;
        this.render();
    }

    connectedCallback() {
        this.classList.add('row');
    }

    render () {
        this.innerHTML = html;
        
        let itemRestaurant;
        this.#listRestaurant.forEach(restaurant => {
            itemRestaurant = document.createElement('item-restaurant');
            itemRestaurant._dataRestaurant = restaurant;

            this.appendChild(itemRestaurant);
        });
    }
}

customElements.define('list-restaurant', ListRestaurant);