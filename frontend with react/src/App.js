import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexEasy from "./IndexEasy";
import CatalogueForm1 from "./CatalogueForm1";
import CostumerServiceForm from "./CostumerServiceForm";
import Memberbenefit from "./Memberbenefit";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/catalogueform1"
          render={(e) => <CatalogueForm1 />}
        />

        <Route
          exact
          path="/customerserviceform"
          render={(e) => <CostumerServiceForm />}
        />

        <Route exact path="/memberbenefit" render={(e) => <Memberbenefit />} />
        <Route exact path="/register" render={(e) => <Register />} />
        <Route exact path="/login" render={(e) => <Login />} />
        <Route exact path="/" render={(e) => <IndexEasy />} />
      </Switch>
    </Router>
  );
}

export default App;
