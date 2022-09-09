// import imgLogo from '../../public/images/logo/logo.png';
// import fb from '../../public/icons/facebook.svg';
// import yt from '../../public/icons/youtube-icon.svg';
// import ig from '../../public/icons/instagram-icon.svg';

const header = () => {
    const img = document.querySelector('#logo');
    img.src = imgLogo
}

const main = () => {
    // header();

    // footer();
}

const footer = () => {
    document.querySelector('#logo-footer').src = imgLogo;
    document.querySelector('#instagram').src = ig;
    document.querySelector('#youtube').src = yt;
    document.querySelector('#facebook').src = fb;
}


export default main;