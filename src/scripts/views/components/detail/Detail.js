/* eslint-disable new-cap */
// import Swal from 'sweetalert2';
import FavoriteRestaurantIdb from '../../../data/favorite-idb';
import RestaurantSource from '../../../data/RestourantSource';
import UrlParser from '../../../routes/url-parser';
import LikeInitiator from '../../../utils/LikeInitiator';

/* eslint-disable class-methods-use-this */
class Detail {
    static async render() {
        return `
            <jumbotron-wrapper> </jumbotron-wrapper>
            <about-restaurant id="mainContent" tabindex="0"> </about-restaurant>
            <container-list></container-list>
            <div class="review">
                <review-list></review-list>
                <review-form></review-form>
            </div>
        `;
    }

    static async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantSource.detailRestaurant(url.id);
        const {
            restaurant,
        } = await restaurantDetail;

        // if (!restaurant) this.showAlert('Restaurant Detail gagal ditampilkan', 'error');
        // Swal.close();

        document.querySelector('jumbotron-wrapper')._dataNameRestauarant = restaurant;

        document.querySelector('about-restaurant')._aboutRestaurant = {
            about: restaurant.description,
            img: restaurant.pictureId,
        };

        document.querySelector('container-list')._menuList = restaurant.menus;

        document.querySelector('aside-info')._setInformationRestaurant = restaurant;

        document.querySelector('review-list')._setCustomerReview = restaurant.customerReviews;

        LikeInitiator.init({
            likeButtonContainer: document.querySelector('.favorite'),
            favoriteRestaurant: FavoriteRestaurantIdb,
            restaurant,
        });

        const expandReview = document.querySelector('#expandReview');
        expandReview.addEventListener('click', (e) => {
            e.target.classList.toggle('d-none');
            document.querySelector('review-list')._setCustomerReview = restaurant.customerReviews;
        });

        document.querySelector('review-form')._onSendReview = async (event) => {
            event.preventDefault();
            const result = await this.postReview(restaurant);
            if (result) {
                document.querySelector('review-list')._setCustomerReview = result.customerReviews;
            }
        };
    }

    // static showAlert(title, type) {
    //     Swal.fire({
    //         title,
    //         text: 'Do you want to continue',
    //         icon: `${type}`,
    //         confirmButtonText: 'Cool',
    //     });
    // }

    // static closeAlert() {
    //     import('sweetalert2/dist/sweetalert2.min')
    //         .then((module) => module.default)
    //         .then((Swal) => Swal.close());
    // }

    static async postReview({ id }) {
        const name = document.querySelector('#name');
        const review = document.querySelector('#review');
        try {
            const result = await RestaurantSource.postRestaurant({
                id,
                name: name.value,
                review: review.value,
            });

            // this.showAlert('Berhasil Posting Review', 'success');
            name.value = '';
            review.value = '';

            return result;
        } catch (error) {
            // this.showAlert('Ooops gagal posting review', 'error');
            console.error(error);
            return false;
        }
    }
}

export default Detail;
