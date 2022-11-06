const createItemRestaurant = (restaurant) => `  
<item-restaurant class="card">
    <img src="${restaurant.pictureId || 'https://picsum.photos/id/666/800/450?grayscale'}" width="300" alt="">
    <div class="info">
        <p class="city">${restaurant.city || ''}</p>
        <p class="menu" id="rating">Rating: ${restaurant.rating || '-'}</p>
    </div>
    <a><h2>${restaurant.name || ''}</h2></a>
    <p id="desc">${restaurant.description || ''}</p>
</item-restaurant>
`;

export default createItemRestaurant;
