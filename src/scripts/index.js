import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';

// header
import '../styles/responsive/header.scss';
import '../styles/header.scss';

// main
import '../styles/main.scss';

import main from './views/main'

console.log('Hello Coders! :)');

document.addEventListener('DOMContentLoaded', main);
// const data = await fetch('')
    