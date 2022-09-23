import FavoriteRestaurantIdb from '../data/favorite-idb';

const LikeInitiator = {
    async init({ restuarant }) {
        this._restaurant = restuarant;

        this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        const buttonLike = document.querySelector('svg');
        buttonLike.classList.add('unactive');
        buttonLike.addEventListener('click', async () => {
            buttonLike.removeAttribute('class');
            buttonLike.classList.add('active');

            // console.log(this._restaurant);
            await FavoriteRestaurantIdb.addRestauarant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        const buttonLike = document.querySelector('svg');
        buttonLike.classList.add('active');

        buttonLike.addEventListener('click', async () => {
            buttonLike.removeAttribute('class');
            buttonLike.classList.add('unactive');

            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeInitiator;
