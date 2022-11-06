/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContracts';

describe('Favorite Restaurant Idb Contract Test Implementation => ', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
