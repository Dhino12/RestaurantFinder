import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// home
import './views/components/home/jumbotron/Jumbotron';
import './views/components/home/wrapperRestaurant/WrapperRestaurant';

// detail
import './views/components/detail/listMenu/ContainerList';
import './views/components/detail/tentang/About';
import './views/components/detail/information/RestaurantInfo';
import './views/components/detail/review/ReviewList';
import './views/components/detail/review/ReviewForm';

// notfound
import './views/components/notfound/notfound';

// header
import '../styles/responsive/header.scss';
import '../styles/responsive/responsive-detail.scss';

// main
import '../styles/main.scss';
import '../styles/header.scss';
import '../styles/detail.scss';

// import hero from '../public/images/logo/logo.png';

import App from './views/App';
import swRegister from './utils/swRegister';

const app = new App({
    button: document.querySelector('#expand'),
    drawer: document.querySelector('nav'),
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    await app.renderPage();

    await swRegister();
});
