import { lazy } from "react";

const Header    = lazy(() => import('./view/Components/Header'));

const routes = [
    { payh: '/', exact:true, name: "Header", component: Header},
];

export default routes;