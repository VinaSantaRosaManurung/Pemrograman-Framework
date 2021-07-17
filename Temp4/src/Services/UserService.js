import axios from "axios";
const API_BASE_URL = "https://fast-coast-53099.herokuapp.com/api/user";
class UserService {
    getUser() {
        return axios.get(API_BASE_URL);
    }
    createUser(data) {
        return axios.post(API_BASE_URL, data);
    }
    getUserById(dataId) {
        return axios.get(API_BASE_URL + "/" + dataId);
    }

    updateUser(data, dataId) {
        return axios.put(API_BASE_URL + "/" + dataId, data);
    }
    deleteUser(dataId) {
        return axios.delete(API_BASE_URL + "/" + dataId);
    }
}
export default new UserService();
