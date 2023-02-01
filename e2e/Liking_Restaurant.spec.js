const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(3);

  I.amOnPage('/');

  I.seeElement('.content-item');

  const firstRestaurant = locate('.content-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');
  const likedRestaurantName = await I.grabTextFrom('.content-item a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
