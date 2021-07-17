import axios from "axios";
const API_BASE_URL = "https://fast-coast-53099.herokuapp.com/api/kategori";

class KategoriService {
    getKategori() {
        return axios.get(API_BASE_URL);
    }
    createKategori(data) {
        return axios.post(API_BASE_URL, data);
    }
    getKategoriById(dataId) {
        return axios.get(API_BASE_URL + "/" + dataId);
    }

    updateKategori(data, dataId) {
        return axios.put(API_BASE_URL + "/" + dataId, data);
    }
    deleteKategori(dataId) {
        return axios.delete(API_BASE_URL + "/" + dataId);
    }
}
export default new KategoriService();
