import RestaurantDbSource from '../../data/db-source';
import { createRestaurantItemTemplate } from '../templates/template';

const List = {
  async render() {
    return `
        <div class="hero" id="hero"></div>
        <h2 class="headline-title">Restaurant List</h2>
        <div class="wrapper-content" id="wrapper-content">
        <div class="content"></div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.RestaurantList();
    const restaurantContainer = document.querySelector('.content');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
