/* eslint-disable new-cap */
import Swal from 'sweetalert2';
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
            <review-list></review-list>
        `;
    }

    static async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantSource.detailRestaurant(url.id);
        const {
            restaurant,
        } = await restaurantDetail;

        if (!restaurant) this.showAlert('Restaurant Detail gagal ditampilkan', 'error');
        Swal.close();

        document.querySelector('jumbotron-wrapper')._dataNameRestauarant = restaurant;

        document.querySelector('about-restaurant')._aboutRestaurant = {
            about: restaurant.description,
            img: restaurant.pictureId,
        };

        document.querySelector('container-list')._menuList = restaurant.menus;

        document.querySelector('aside-info')._setInformationRestaurant = restaurant;

        document.querySelector('review-list')._setCustomerReview = await restaurant.customerReviews;

        LikeInitiator.init({
            restuarant: restaurant,
        });

        const expandReview = document.querySelector('#expandReview');
        if (expandReview) {
            expandReview.addEventListener('click', (e) => {
                e.target.innerText = '';
                document.querySelector('review-list')._setCustomerReview = restaurant.customerReviews;
            });
        }

        document.querySelector('review-form')._onSendReview = async (e) => {
            e.preventDefault();
            const name = document.querySelector('#name');
            const review = document.querySelector('#review');
            const result = await RestaurantSource.postRestaurant({
                id: restaurant.id,
                name: name.value,
                review: review.value,
            });

            if (result.error === false) {
                this.showAlert('Berhasil Posting Review', 'success');
                name.value = '';
                review.value = '';
                document.querySelector('review-list')._setCustomerReview = restaurant.customerReviews;
            } else {
                this.showAlert('Ooops gagal posting review', 'error');
            }
        };
    }

    static showAlert(title, type) {
        Swal.fire({
            title,
            text: 'Do you want to continue',
            icon: `${type}`,
            confirmButtonText: 'Cool',
        });
    }
}

export default Detail;
