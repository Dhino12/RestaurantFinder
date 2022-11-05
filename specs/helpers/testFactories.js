import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-idb';
import LikeInitiator from '../../src/scripts/utils/LikeInitiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeInitiator.init({
        likeButtonContainer: document.querySelector('.favorite'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
    });
};

export default createLikeButtonPresenterWithRestaurant;
