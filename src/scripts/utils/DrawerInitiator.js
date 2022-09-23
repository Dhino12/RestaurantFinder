class DrawerInitiator {
    static init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    }

    static _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('show');
    }

    static _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('show');
    }
}

export default DrawerInitiator;
