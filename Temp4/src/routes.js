/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import CreateUser from "./User/CreateUser";
import ListUser from "./User/ListUser";
import CreateKategori from "./Kategori/CreateKategori";
import ListKategori from "./Kategori/ListKategori";
import CreatePayment from "./Payment/CreatePayment";
import ListPayment from "./Payment/ListPayment";
import CreateMenu from "./Menu/CreateMenu";
import ListMenu from "./Menu/ListMenu";

const dashboardRoutes = [
  {
    path: "/menu",
    name: "Menu",
    icon: "pe-7s-menu",
    component: ListMenu,
    layout: "/admin"
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "pe-7s-cash",
    component: ListPayment,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User",
    icon: "pe-7s-users",
    component: ListUser,
    layout: "/admin"
  },
  {
    path: "/kategori",
    name: "Kategori",
    icon: "pe-7s-news-paper",
    component: ListKategori,
    layout: "/admin"
  },
  {
    path: "/add-menu/:id",
    name: "Menu",
    icon: "pe-7s-pen",
    component: CreateMenu,
    layout: "/admin"
  },
  {
    path: "/add-payment/:id",
    name: "Payment",
    icon: "pe-7s-calculator",
    component: CreatePayment,
    layout: "/admin"
  },
  {
    path: "/add-user/:id",
    name: "User",
    icon: "pe-7s-add-user",
    component: CreateUser,
    layout: "/admin"
  },
  {
    path: "/add-kategori/:id",
    name: "Kategori",
    icon: "pe-7s-note",
    component: CreateKategori,
    layout: "/admin"
  },
];

export default dashboardRoutes;
