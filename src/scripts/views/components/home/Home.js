/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import RestaurantSource from '../../../data/RestourantSource';
import herosLarge from '../../../../../dist/public/images/heros/hero-image_1-large.jpeg';
import herosSmall from '../../../../../dist/public/images/heros/hero-image_1-small.jpeg';
import herosWebp from '../../../../../dist/public/images/heros/hero-image_1-large.webp';
import wave from '../../../../public/icons/grey_bottom_wave_01.png';

class Home {
    static async render() {
        return `
            <jumbotron-wrapper></jumbotron-wrapper>
            <wrapper-restaurant id="mainContent" tabindex="0"></wrapper-restaurant>
        `;
    }

    static async afterRender() {
        console.log('X', window.screXenX);
        console.log('Y', window.screenY);
        document.querySelector('#sm-webp-image').srcset = herosWebp;
        document.querySelector('.jumbotron picture source[type="image/png"]').srcset = herosSmall;
        document.querySelector('#large-webp-image').srcset = herosWebp;
        document.querySelector('.jumbotron picture img').src = herosLarge;
        document.querySelector('.jumbotron .wave').src = wave;

        const restaurants = await RestaurantSource.listRestaurant();
        // if (restaurants.length) {
        //     import('sweetalert2/dist/sweetalert2.min')
        //     .then((module) => module.default)
        //     .then((Swal) => Swal.close());
        // }
        document.querySelector('wrapper-restaurant')._restaurants = restaurants;
    }
}

export default Home;
