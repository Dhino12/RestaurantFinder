/* eslint-disable no-undef */
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
    I.seeElement('.card a h2');

    const firstRestaurant = locate('.card a h2').first();
    I.wait(2);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card h2');

    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Cancel liking the one restaurant => ', async ({ I }) => {
    I.see('Oh no, Kamu belum menambahkan favorite', 'not-found');

    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.card');

    let firstRestaurant = locate('.card h2').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card h2');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    firstRestaurant = locate('.card h2').first();
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('#unlikeButton');
    I.click('#unlikeButton');

    I.amOnPage('/#/favorite');
    I.see('Oh no, Kamu belum menambahkan favorite', 'not-found');
});

Scenario('Review of a restaurant', async ({ I }) => {
    I.see('Oh no, Kamu belum menambahkan favorite', 'not-found');

    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.card');

    const firstRestaurant = locate('.card h2').first();
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('input#name');
    I.seeElement('textarea#review');

    const name = 'Joko';
    const review = 'enak banget (testing)';
    I.fillField('#name', name);
    I.fillField('#review', review);

    I.click('#send-review');
    I.wait(2);

    const lastReview = locate('.content h2').last();
    const lastReviewTitle = await I.grabTextFrom(lastReview);

    assert.strictEqual(lastReviewTitle, name);
});
