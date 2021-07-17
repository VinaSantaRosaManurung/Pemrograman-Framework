import React, { Component } from "react";
import KategoriService from "../Services/KategoriService";

class CreateKategori extends Component {


    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nama: "",
        };
        this.setValueNama = this.setValueNama.bind(this);
    }



    deleteKategori(id) {
        console.log(id);

        KategoriService.deleteKategori(id).then((res) => {
            this.setState({
                kategoris: this.state.kategoris.filter((kategori) => kategori._id !== id),
            });
        });
    }

    componentDidMount() {
        if (this.state.id === "_add") {
            return;
        } else {
            KategoriService.getKategoriById(this.state.id).then((res) => {
                let kategori = res.data;
                this.setState({
                    nama: kategori.nama,
                });
            });
        }
    }
    saveOrUpdateKategori = (e) => {
        e.preventDefault();
        let kategori = {
            nama: this.state.nama,
        };
        console.log("kategori => " + JSON.stringify(kategori));

        if (this.state.id === "_add") {
            KategoriService.createKategori(kategori).then((res) => {
                this.props.history.push("/admin/kategori");
            });
        } else {
            KategoriService.updateKategori(kategori, this.state.id).then((res) => {
                this.props.history.push("/admin/kategori");
            });
        }
    };


    setValueNama = (event) => {
        this.setState({ nama: event.target.value });
    };


    cancel() {
        this.props.history.push("/admin/kategori");
    }
    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add Kategori</h3>;
        } else {
            return <h3 className="text-center">Update Kategori</h3>;
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
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdateKategori}
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
export default CreateKategori;