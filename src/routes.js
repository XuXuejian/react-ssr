import Home from "./Home";
import About from "./About";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: () => {},
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
