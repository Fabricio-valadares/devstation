import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import GetUsers from "../pages/GetUsers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/users" component={GetUsers} />
    </Switch>
  );
};

export default Routes;
