import createLikeButton from '../views/template/likeButton';
import createUnlikeButton from '../views/template/unlikeButton';

const LikeInitiator = {
    async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
        this._favoriteRestaurant = favoriteRestaurant;

        await this._renderButton();
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
        const restaurant = await this._favoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    stringToNode(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div;
    },

    _renderLike() {
        this._likeButtonContainer.replaceChild(
            this.stringToNode(createLikeButton()),
            this._likeButtonContainer.children[0],
        );

        const buttonLike = document.querySelector('#likeButton');
        buttonLike.classList.add('unactive');
        buttonLike.addEventListener('click', async () => {
            buttonLike.removeAttribute('class');
            buttonLike.classList.add('active');

            this._favoriteRestaurant.putRestauarant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.replaceChild(
            this.stringToNode(createUnlikeButton()),
            this._likeButtonContainer.children[0],
        );

        const buttonLike = document.querySelector('#unlikeButton');
        buttonLike.classList.add('active');

        buttonLike.addEventListener('click', async () => {
            buttonLike.removeAttribute('class');
            buttonLike.classList.add('unactive');

            this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeInitiator;
