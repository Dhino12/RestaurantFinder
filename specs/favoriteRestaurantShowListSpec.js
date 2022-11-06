/* eslint-disable no-unused-vars */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/components/favorite/liked-restaurant/FavoriteRestaurantSearchView';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/components/favorite/liked-restaurant/FavoriteRestaurantShowPresenter';

/* eslint-disable no-undef */
// Menampilkan semua daftar restoran favorit
describe('Showing all favorite list restaurant => ', () => {
    let view;
    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    // Ketika tidak ada restoran yang disukai
    describe('When no restaurant have been liked => ', () => {
        // harus meminta restoran favorit
        it('should ask for the favorite restaurant', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            const data = new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });

            expect(favoriteRestaurants.getAllRestaurant)
                .toHaveBeenCalledTimes(1);
        });
    });

    // Ketika restaurant favorit ada
    describe('When favorite restaurant exist => ', () => {
        // tampilkan semua favorite restaurant
        it('should show the restaurant', (done) => {
            document.getElementById('mainContent').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.card').length).toEqual(2);

                done();
            });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
            favoriteRestaurants.getAllRestaurant.and.returnValues([
                {
                    id: '6c7bqjgi84kcowlqdz',
                    name: 'Bring Your Phone Cafe',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
                    pictureId: 'https://restaurant-api.dicoding.dev/images/medium/41',
                    city: 'Medan',
                    rating: 4.6,
                },
                {
                    id: '6c7bqjgi84kcowlqdz',
                    name: 'Bring Your Phone Cafe',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
                    pictureId: 'https://restaurant-api.dicoding.dev/images/medium/41',
                    city: 'Medan',
                    rating: 4.6,
                },
            ]);

            const data = new FavoriteRestaurantShowPresenter({
                view, favoriteRestaurants,
            });
        });
    });
});
