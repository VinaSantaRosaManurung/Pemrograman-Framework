import axios from "axios";
const API_BASE_URL = "https://fast-coast-53099.herokuapp.com/api/menu";

class MenuService {
    getMenu() {
        return axios.get(API_BASE_URL);
    }
    createMenu(data, config) {
        return axios.post(API_BASE_URL, data, config);
    }
    getMenuById(dataId) {
        return axios.get(API_BASE_URL + "/" + dataId);
    }

    updateMenu(data, dataId, config) {
        return axios.put(API_BASE_URL + "/" + dataId, data, config);
    }
    deleteMenu(dataId) {
        return axios.delete(API_BASE_URL + "/" + dataId);
    }
}
export default new MenuService();
