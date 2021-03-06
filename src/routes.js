import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Redirect from "./pages/Redirect";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Redirect} />
        <Route path="/gitpage/:user" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
