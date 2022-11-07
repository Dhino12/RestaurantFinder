/* eslint-disable no-undef */
import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContracts';

let favoriteRestaurant = [];
const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if (!id) {
        return;
        }

        // eslint-disable-next-line consistent-return
        return favoriteRestaurant.find((restaurant) => restaurant.id === id);
    },

    getAllRestaurant() {
        return favoriteRestaurant;
    },

    putRestauarant(restaurant) {
        // eslint-disable-next-line no-prototype-builtins
        if (!restaurant.hasOwnProperty('id')) {
        return;
        }

        // pastikan id ini belum ada dalam daftar favoriteRestaurant
        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurant.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id !== id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation => ', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteRestaurant = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
