import axios from "axios";
const API_BASE_URL = "https://fast-coast-53099.herokuapp.com/api/payment";

class PaymentService {
    getPayment() {
        return axios.get(API_BASE_URL);
    }
    createPayment(data, config) {
        return axios.post(API_BASE_URL, data, config);
    }
    getPaymentById(dataId) {
        return axios.get(API_BASE_URL + "/" + dataId);
    }

    updatePayment(data, dataId) {
        return axios.put(API_BASE_URL + "/" + dataId, data);
    }
    deletePayment(dataId) {
        return axios.delete(API_BASE_URL + "/" + dataId);
    }
}
export default new PaymentService();
