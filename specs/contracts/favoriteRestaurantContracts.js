/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
    it('should return the restaurant that has been added', async () => {
        favoriteRestaurant.putRestauarant({ id: 1 });
        favoriteRestaurant.putRestauarant({ id: 2 });

        expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
        expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
        expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
    });

    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        favoriteRestaurant.putRestauarant({ somethingProp: 'property' });

        expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
    });

    it('can return all of the restaurant that have been added', async () => {
        favoriteRestaurant.putRestauarant({ id: 1 });
        favoriteRestaurant.putRestauarant({ id: 2 });
        favoriteRestaurant.putRestauarant({ id: 3 });

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('should remove favorite restaurant', async () => {
        favoriteRestaurant.putRestauarant({ id: 1 });
        favoriteRestaurant.putRestauarant({ id: 2 });
        favoriteRestaurant.putRestauarant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(1);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('should handle request to remove a movie even though the movie has not been added', async () => {
        favoriteRestaurant.putRestauarant({ id: 1 });
        favoriteRestaurant.putRestauarant({ id: 2 });
        favoriteRestaurant.putRestauarant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(4);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
    });
};

export default itActsAsFavoriteRestaurantModel;
