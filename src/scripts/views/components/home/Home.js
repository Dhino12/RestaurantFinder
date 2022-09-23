/* eslint-disable class-methods-use-this */
import Swal from 'sweetalert2';
import RestaurantSource from '../../../data/RestourantSource';
import heros from '../../../../public/images/heros/hero-image_1.jpg';
import wave from '../../../../public/icons/grey_bottom_wave_01.png';

class Home {
    static async render() {
        return `
            <jumbotron-wrapper></jumbotron-wrapper>
            <wrapper-restaurant id="mainContent" tabindex="0"></wrapper-restaurant>
        `;
    }

    static async afterRender() {
        document.querySelector('.jumbotron img').src = heros;
        document.querySelector('.jumbotron .wave').src = wave;

        const restaurants = await RestaurantSource.listRestaurant();
        Swal.close();
        document.querySelector('wrapper-restaurant')._restaurants = restaurants;
    }
}

export default Home;
