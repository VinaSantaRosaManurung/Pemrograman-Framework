import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import KategoriService from "../Services/KategoriService";

class ListKategori extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kategoris: [],
        };
        this.addKategori = this.addKategori.bind(this);
        this.editKategori = this.editKategori.bind(this);
        this.deleteKategori = this.deleteKategori.bind(this);
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
        KategoriService.getKategori().then((res) => {
            this.setState({ kategoris: res.data });
        });
    }
    addKategori() {
        this.props.history.push("/admin/add-kategori/_add");
    }

    editKategori(id) {
        this.props.history.push("/admin/add-kategori/" + id);
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="row" style={{ padding: 10 }}>
                    <button class="btn btn-primary" onClick={this.addKategori}>
                        Tambah Kategori
              </button>
                </div>

                <br />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.kategoris.map((kategori) => (
                            <tr>
                                <th scope="row">1</th>
                                <td> {kategori.nama}</td>
                                <td>
                                    <Button
                                        onClick={() => this.editKategori(kategori._id)}
                                        color="warning"
                                    >
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            class="bi bi-pencil-square"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            />
                                        </svg>
                                    </Button>
                                    <Button
                                        onClick={() => this.deleteKategori(kategori._id)}
                                        color="danger"
                                    >
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            class="bi bi-trash-fill"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                            />
                                        </svg>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }

}
export default ListKategori;