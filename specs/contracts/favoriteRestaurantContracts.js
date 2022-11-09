/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
    // harus mengembalikan restoran yang telah ditambahkan
    it('should return the restaurant that has been added', async () => {
        favoriteRestaurant.putRestauarant({ id: 1 });
        favoriteRestaurant.putRestauarant({ id: 2 });

        expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
        expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
        expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
    });

    // harus mengembalikan data kosong apabila tidak memiliki properti yang benar
    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        favoriteRestaurant.putRestauarant({ somethingProp: 'property' });

        expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
    });

    // dapat mengembalikan semua restoran yang telah ditambahkan
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

    // harus menghapus restoran favorit
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

    // harus menangani permintaan menghapus restaurant ketika id tidak tersedia dalam data
    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
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
