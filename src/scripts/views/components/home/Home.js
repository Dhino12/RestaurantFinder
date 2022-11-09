/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable class-methods-use-this */
// import Swal from 'sweetalert2';
import RestaurantSource from '../../../data/RestourantSource';
import herosLarge from '/dist/public/images/heros/hero-image_1-large.jpeg';
import herosSmall from '/dist/public/images/heros/hero-image_1-small.jpeg';
import herosWebpSmall from '/dist/public/images/heros/hero-image_1-small.webp';
import herosWebp from '/dist/public/images/heros/hero-image_1-large.webp';
import wave from '../../../../public/icons/grey_bottom_wave_01.png';

class Home {
    static async render() {
        return `
            <jumbotron-wrapper></jumbotron-wrapper>
            <wrapper-restaurant id="mainContent" tabindex="0"></wrapper-restaurant>
        `;
    }

    static async afterRender() {
        console.log(window.screen.availWidth, ' x ', window.screen.availHeight);
        document.querySelector('#sm-webp-image').srcset = herosWebpSmall;
        document.querySelector('.jumbotron picture source[type="image/png"]').srcset = herosSmall;
        document.querySelector('#large-webp-image').srcset = herosWebp;
        document.querySelector('.jumbotron picture img').src = herosLarge;
        document.querySelector('.jumbotron .wave').src = wave;

        const restaurants = await RestaurantSource.listRestaurant();
        // Swal.close();
        document.querySelector('wrapper-restaurant')._restaurants = restaurants;
    }
}

export default Home;
