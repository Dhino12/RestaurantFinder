/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Like A Restaurant => ', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="favorite"> <div></div> </div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // harus menunjukkan tombol suka ketika film belum disukai sebelumnya
  it('should show the like button when the movie has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.unactive')).toBeTruthy();
  });

  // tidak boleh menunjukkan tombol (sudah disukai) saat film belum disukai sebelumnya
  it('should not show the unlike button when the movie has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.active')).toBeFalsy();
  });

  // harus dapat menyukai film
  it('should be able to like the movie', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // sebaiknya tidak menambahkan film lagi ketika sudah disukai
  it('should not add a movie again when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestauarant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // seharusnya tidak menambahkan film ketika tidak memiliki id
  it('should not add a movie when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
