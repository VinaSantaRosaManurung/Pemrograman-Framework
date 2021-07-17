import React, { Component } from "react";
import PaymentService from "../Services/PaymentService";
import MenuService from "../Services/MenuService";

class CreatePayment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            menus: [],
            id_menu: "",
            jumlah: "",

        };
        this.setValueIdMenu = this.setValueIdMenu.bind(this);
        this.setValueJumlah = this.setValueJumlah.bind(this);
    }

    deletePayment(id) {
        console.log(id);

        PaymentService.deletePayment(id).then((res) => {
            this.setState({
                payments: this.state.payments.filter((payment) => payment.id !== id),
            });
        });
    }

    componentDidMount() {
        // step 4
        MenuService.getMenu().then((res) => {
            this.setState({ menus: res.data });
        });
        if (this.state.id === "_add") {
            return;
        } else {
            PaymentService.getPaymentById(this.state.id).then((res) => {
                let payment = res.data;
                this.setState({
                    id_menu: payment.id_menu,
                    jumlah: payment.jumlah,
                });
            });
        }
    }
    saveOrUpdatePayment = (e) => {
        e.preventDefault();
        let payment = {
            id_menu: this.state.id_menu,
            jumlah: this.state.jumlah,
        };
        console.log("payment => " + JSON.stringify(payment));
        if (this.state.id === "_add") {
            PaymentService.createPayment(payment).then((res) => {
                this.props.history.push("/admin/payment");
            });
        } else {
            PaymentService.updatePayment(payment, this.state.id).then((res) => {
                this.props.history.push("/admin/payment");

            });
        }
    };
    setValueIdMenu = (event) => {
        this.setState({ id_menu: event.target.value });
    };
    setValueJumlah = (event) => {
        this.setState({ jumlah: event.target.value });
    };

    cancel() {
        this.props.history.push("/admin/payment");
    }
    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add Payment</h3>;
        } else {
            return <h3 className="text-center">Update Payment</h3>;
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
                                        <label> Nama Menu : </label>
                                        <select name="id_menu"
                                            className="form-control"
                                            value={this.state.id_menu}
                                            onChange={this.setValueIdMenu}>
                                            <option>pilih</option>
                                            {this.state.menus.map((menu) => (
                                                <option value={menu._id}>{menu.nama}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> Jumlah : </label>
                                        <input
                                            placeholder="Jumlah"
                                            name="jumlah"
                                            className="form-control"
                                            value={this.state.jumlah}
                                            onChange={this.setValueJumlah}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdatePayment}
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
export default CreatePayment;