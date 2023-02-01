Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking one favorite restaurant', async ({ I }) => {
  I.wait(3);
  I.amOnPage('/');

  I.seeElement('.content-item');
  I.click(locate('.content-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');

  I.click(locate('.content-button').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.content-item');
});
