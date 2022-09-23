import Swal from 'sweetalert2';
import API_ENDPOINT from '../global/api_endpoint';

class RestaurantSource {
    static showLoading() {
        Swal.fire({
            html: '<h5>Loading...</h5>',
            showConfirmButton: false,
            onOpen: () => {
              Swal.showLoading();
            },
        });
    }

    static async listRestaurant() {
        try {
            this.showLoading();
            const response = await fetch(API_ENDPOINT.LIST);
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            return error;
        }
    }

    static async detailRestaurant(id) {
        try {
            this.showLoading();
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const dataDetail = await response.json();
            return dataDetail;
        } catch (error) {
            return error;
        }
    }

    static async postRestaurant(data) {
        try {
            this.showLoading();
            const dataPost = await fetch(API_ENDPOINT.REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await dataPost.json();
            return responseData;
        } catch (error) {
            return error;
        }
    }
}

export default RestaurantSource;
