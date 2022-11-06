/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Unliking A Restaurant =>', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div class="favorite"> <div></div> </div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();

        // sukai 1 film
        await FavoriteRestaurantIdb.putRestauarant({
            id: 1,
        });
    });

    afterEach(async () => {
        // setelah selesai hapus film
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    // harus menampilkan tombol liked (tombol sudah disukai)
    it('should display unlike widget when the movie has been liked', async () => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('.active')).toBeTruthy();
    });

    // tidak menampilkan tombol like (tombol belum disukai) ketika sudah terdapat data
    it('should not display like widget when the movie has been liked', async () => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('.unactive')).toBeFalsy();
    });

    // harus dapat menghapus film yang disukai dari daftar
    // menghapus restaurant dari daftar disukai ketika tombol liked dalam keadaan .active
    it('should be able to remove liked movie from the list', async () => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('.active').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    // tidak boleh melakukan kesalahan jika restaurant yang tidak disukai, tidak ada dalam daftar
    it('should not throw error if the unliked movie is not in the list', async () => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 });

        // hapus dulu film dari daftar restaurant yang disukai
        await FavoriteRestaurantIdb.deleteRestaurant(1);

        // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
        document.querySelector('.active').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});

/**
 * Note..
 * .active => tombol like dalam keadaan disukai
 * .unactive => tombol like dalam keadaan belum disukai
 */
