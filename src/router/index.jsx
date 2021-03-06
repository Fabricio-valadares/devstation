import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import GetUsers from "../pages/Users";
import Home from "../pages/Home";
import Groups from "../pages/Groups";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/users" component={GetUsers} />
        <Route exact path="/groups" component={Groups} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
