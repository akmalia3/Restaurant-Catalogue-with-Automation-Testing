import FavoriteRestaurantIdb from '../../data/favotite-restaurants';
import { createRestaurantItemTemplate } from '../templates/template';

const Like = {
  async render() {
    return `
    <div class="favorite-content">
      <h2 class="headline-title">Liked Restaurants</h2>
      <div class="wrapper-content">
      <div class="content"></div>
      <div class="blank-favorite-content"></div>
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.content');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
