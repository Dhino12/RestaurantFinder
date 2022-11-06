import createItemRestaurant from '../../../template/itemRestaurant';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <wrapper-restaurant tabindex="0" id="mainContent"></wrapper-restaurant>
        `;
    }

    // runWhenUserIsSearching(callback) {
    //     document.getElementById('query').addEventListener('change', (event) => {
    //         callback(event.target.value);
    //     });
    // }

    _showFavoriteRestaurant(restaurants = []) {
        document.querySelector('#mainContent').innerHTML = this.#getEmptyRestaurantTemplate();

        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createItemRestaurant(restaurant)), '');
        } else {
            html = this.#getEmptyRestaurantTemplate();
        }

        document.querySelector('wrapper-restaurant').innerHTML = html;
        document.querySelector('wrapper-restaurant').dispatchEvent(new Event('restaurants:updated'));
    }

    #getEmptyRestaurantTemplate() {
        return '<not-found class="container notfound"> </not-found>';
    }
}

export default FavoriteRestaurantSearchView;
