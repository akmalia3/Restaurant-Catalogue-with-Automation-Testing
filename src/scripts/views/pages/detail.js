import RestaurantDbSource from '../../data/db-source';
import UrlParser from '../../routes/url-parse';
import { createRestaurantDetailTemplate } from '../templates/template';
import LikeButtonInitiator from '../../utils/like-button';

const Details = {
  async render() {
    return `
    <div class="wrapper-content" id="wrapper-content">
    <div class="restaurants"></div>
    </div>
    <div id="likeButtonContainer"></div>
    
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.DetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurants');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: url.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
  },
};

export default Details;
