import html from './about.html';

class About extends HTMLElement {
    #descriptionRestaurant = '';

    #imgRestaurant = '';

    set _aboutRestaurant({ about, img }) {
        this.#descriptionRestaurant = about;
        this.#imgRestaurant = img;

        this.render();
    }

    connectedCallback() {
        this.classList.add('detail');
    }

    render() {
        this.innerHTML = html;

        this.querySelector('p').innerText = this.#descriptionRestaurant;
        this.querySelector('.img-about').style.backgroundImage = `url("https://restaurant-api.dicoding.dev/images/medium/${this.#imgRestaurant}")`;
    }
}

customElements.define('about-restaurant', About);
