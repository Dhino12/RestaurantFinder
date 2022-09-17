import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';

import './views/components/headers/HeaderFloating'
import './views/components/main/jumbotron/Jumbotron';
import './views/components/main/wrapperRestaurant/WrapperRestaurant';
import './views/components/main/popularRestaurant/WrapperPopular';
import './views/components/footer/FooterWrapper';

// header
import '../styles/responsive/header.scss';
import '../styles/header.scss';

// main
import '../styles/main.scss';

import main from './views/main'

console.log('Hello Coders! :)');

document.addEventListener('DOMContentLoaded', main);
// const data = await fetch('')
    