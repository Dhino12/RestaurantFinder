import html from './WrapperListMenu.html';
import '../information/RestaurantInfo';

class ContainerList extends HTMLElement {
    #menuList = [];

    set _menuList(listMenu) {
        this.#menuList = listMenu;

        this.render();
    }

    connectedCallback() {
        this.classList.add('container-detail');
    }

    #inputTextMenu(elemen, type) {
        let li;
        this.#menuList[type].forEach((menu) => {
            li = document.createElement('li');
            li.innerText = menu.name;
            elemen.appendChild(li);
        });
    }

    render() {
        this.innerHTML = html;

        const food = this.querySelector('.food ul');
        this.#inputTextMenu(food, 'foods');

        const drink = this.querySelector('.drink ul');
        this.#inputTextMenu(drink, 'drinks');
    }
}

customElements.define('container-list', ContainerList);
