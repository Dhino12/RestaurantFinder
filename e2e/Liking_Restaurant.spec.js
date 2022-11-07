const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('show empty favorite restaurant', ({ I }) => {
    I.seeElement('#mainContent');

    I.see('Oh no, Kamu belum menambahkan favorite', 'not-found');
});

Scenario('like one restaurant ', async ({ I }) => {
    I.see('Oh no, Kamu belum menambahkan favorite', 'not-found');

    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.card');

    const firstRestaurant = locate('.card h2').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card h2');

    console.log(firstRestaurantTitle, ' => ', likedRestaurantTitle);
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
