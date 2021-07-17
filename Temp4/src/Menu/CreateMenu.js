import React, { Component } from "react";
import MenuService from "../Services/MenuService";
import KategoriService from "../Services/KategoriService";

class CreateMenu extends Component {


    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nama: "",
            kategoris: [],
            id_kategori: "",
            foto: "",
            file: null,
            deskripsi: "",
            rating: "",
            harga: "",

        };
        this.setValueNama = this.setValueNama.bind(this);
        this.setValueIdKategori = this.setValueIdKategori.bind(this);
        this.setValueFoto = this.setValueFoto.bind(this);
        this.setValueDeskripsi = this.setValueDeskripsi.bind(this);
        this.setValueRating = this.setValueRating.bind(this);
        this.setValueHarga = this.setValueHarga.bind(this);
    }



    deleteMenu(id) {
        console.log(id);

        MenuService.deleteMenu(id).then((res) => {
            this.setState({
                menus: this.state.menus.filter((menu) => menu._id !== id),
            });
        });
    }

    componentDidMount() {
        KategoriService.getKategori().then((res) => {
            this.setState({ kategoris: res.data });
        });

        if (this.state.id === "_add") {
            return;
        } else {
            MenuService.getMenuById(this.state.id).then((res) => {
                let menu = res.data;
                this.setState({
                    nama: menu.nama,
                    id_kategori: menu.id_kategori,
                    foto: menu.foto,
                    deskripsi: menu.deskripsi,
                    rating: menu.rating,
                    harga: menu.harga,
                });
            });
        }
    }
    saveOrUpdateMenu = (e) => {
        e.preventDefault();
        let menu = {
            nama: this.state.nama,
            id_kategori: this.state.id_kategori,
            foto: this.state.foto,
            deskripsi: this.state.deskripsi,
            rating: this.state.rating,
            harga: this.state.harga,

        };
        console.log("menu => " + JSON.stringify(menu));
        const formData = new FormData();
        formData.append('nama', this.state.nama);
        formData.append('id_kategori', this.state.id_kategori);
        formData.append('foto', this.state.file);
        formData.append('deskripsi', this.state.deskripsi);
        formData.append('rating', this.state.rating);
        formData.append('harga', this.state.harga);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        if (this.state.id === "_add") {
            MenuService.createMenu(formData, config).then((res) => {
                this.props.history.push("/admin/menu");
            });
        } else {
            MenuService.updateMenu(formData, this.state.id, config).then((res) => {
                this.props.history.push("/admin/menu");
            });
        }
    };

    setValueNama = (event) => {
        this.setState({ nama: event.target.value });

    };
    setValueIdKategori = (event) => {
        this.setState({ id_kategori: event.target.value });

    };
    setValueFoto = (event) => {
        this.setState({ foto: event.target.value, file: event.target.files[0] });

    };
    setValueDeskripsi = (event) => {
        this.setState({ deskripsi: event.target.value });

    };
    setValueRating = (event) => {
        this.setState({ rating: event.target.value });

    };
    setValueHarga = (event) => {
        this.setState({ harga: event.target.value });

    };


    cancel() {
        this.props.history.push("/admin/menu");
    }
    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add menu</h3>;
        } else {
            return <h3 className="text-center">Update menu</h3>;
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nama: </label>
                                        <input
                                            placeholder="Nama"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.nama}
                                            onChange={this.setValueNama}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Id Kategori: </label>
                                        <select name="id_kategori"
                                            className="form-control"
                                            value={this.state.id_kategori}
                                            onChange={this.setValueIdKategori}>
                                            <option>Silahkan Pilih Data</option>
                                            {this.state.kategoris.map((kategori) => (
                                                <option value={kategori._id}>{kategori.nama}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Foto: </label>
                                        <input
                                            placeholder="Foto"
                                            type="file"
                                            name="emailId"
                                            className="form-control"
                                            onChange={this.setValueFoto}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Deskripsi: </label>
                                        <input
                                            placeholder="Deskripsi"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.deskripsi}
                                            onChange={this.setValueDeskripsi}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Rating: </label>
                                        <input
                                            placeholder="Rating"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.rating}
                                            onChange={this.setValueRating}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Harga: </label>
                                        <input
                                            placeholder="Harga"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.harga}
                                            onChange={this.setValueHarga}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdateMenu}
                                    >
                                        Save
                 </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                 </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateMenu;