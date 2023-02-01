import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="headline-title">${restaurant.name}</h2>
    <img class="restaurant-picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    
    <div class="content-rating">
    <p>Rating: ⭐️ <span>${restaurant.rating}</span> </p>
    <p>Address: ${restaurant.city}, ${restaurant.address}</p>
    </div>
    
    <div class="restaurant-list-menu"> 
    <h3>Description</h3>
    <div class="restaurant-list-info">
    <p>${restaurant.description}</p>
    </div>
    </div>

    <div class="restaurant-list-menu"> 
    <h3>Our Menu</h3>
    <div class="restaurant-list-info">
    <p><strong>Foods</strong></p> 
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p><br>
    </div>
    <div class="restaurant-list-info">
    <p><strong>Drinks</strong></p> 
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    </div>
    </div>

    <div class="restaurant-list-menu">
    <h3>Customer Review</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="restaurant-list-info">
    <h6>${review.name}</h6>
    <p>${review.date}</p>
    <p>${review.review}</p>
    </div>`).join(' ')}
    </div>
    
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="content-item">
    <img class="lazyload" id="content-image" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
    <h2 class="content-text-title">${restaurants.name}</h2>
    <div class="content-text">
    <p>This restaurant is located in ${restaurants.city} and has a rating of ⭐️<span>${restaurants.rating}</span></p>
    </div>
    <div class="content-button">
    <a href="/#/detail/${restaurants.id}"><button>Click For Detail</button></a>
    </div>
    </div>   
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikedButtonTemplate,
  createLikeButtonTemplate,
};
