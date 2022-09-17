import imgLogo from '../../public/images/logo/logo.png';
import fb from '../../public/icons/facebook.svg';
import yt from '../../public/icons/youtube-icon.svg';
import ig from '../../public/icons/instagram-icon.svg';
import hero from '../../public/images/heros/hero-image_4.jpg';
import data from '../../DATA.json';
import dataMenu from '../../DATAMENU.json';

const mainEl = document.querySelector('main');

const header = () => {
    const headerFloating = document.querySelector('header-floating');
    headerFloating._eventExpandNav = (e) => {
        if (e.target.id === 'expand') {
            document.querySelector('nav').classList.toggle('show');
        }
    };

    const img = document.querySelector('#logo');
    img.src = imgLogo;
};

const main = () => {
    header();
    jumbotron();
    wrapperRestaurant();
    // wrapperPopular();
    footer();
};

const jumbotron = () => {
    const jumbotron = document.createElement('jumbotron-wrapper');
    mainEl.appendChild(jumbotron);

    document.querySelector('.jumbotron img').src = hero;
};

const wrapperRestaurant = () => {
    const wrapperRestaurant = document.createElement('wrapper-restaurant');
    mainEl.appendChild(wrapperRestaurant);

    wrapperRestaurant._restaurants = data;
};

const wrapperPopular = () => {
    const wrapperPopular = document.createElement('wrapper-popular');
    mainEl.appendChild(wrapperPopular);

    wrapperPopular._setPopular = searchRestaurantPopular();
};

const footer = () => {
    document.querySelector('#logo-footer').src = imgLogo;
    document.querySelector('#instagram').src = ig;
    document.querySelector('#youtube').src = yt;
    document.querySelector('#facebook').src = fb;
};

const searchRestaurantPopular = () => {
    let tmp = 0;
    let tmpObj;
    data.restaurants.forEach((restaurant, index) => {
        if (tmp < restaurant.rating) {
            tmp = restaurant.rating;
            tmpObj = restaurant;
        }
    });

    tmpObj.menu = dataMenu.menu.filter((menu) => menu.id === tmpObj.id)[0];
    return tmpObj;
};

function scrollKe(id) {
    const getMeTo = document.querySelector(`${id}`);
    console.log(getMeTo);
    getMeTo.scrollIntoView({
        behavior: "smooth"
    }, true);
}

export default main;
