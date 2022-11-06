import FavoriteRestaurantIdb from '../../../data/favorite-idb';
import scarecrow from '../../../../public/images/heros/orang-sawah.png';

class Favorite {
    static async render() {
        return `
            <wrapper-restaurant tabindex="0" id="mainContent"></wrapper-restaurant>
        `;
    }

    static async afterRender() {
        const restaurantFavorite = await FavoriteRestaurantIdb.getAllRestaurant();
        document.querySelector('wrapper-restaurant')._restaurants = restaurantFavorite;
        document.querySelector('wrapper-restaurant h1').innerText = 'Restaurant favorit anda';

        if (restaurantFavorite.length === 0) {
            const explore = document.querySelector('wrapper-restaurant .explore');
            explore.innerHTML = '<not-found class="container notfound"> </not-found>';
            document.querySelector('#scareCrow').src = scarecrow;
        }
    }
}

export default Favorite;
