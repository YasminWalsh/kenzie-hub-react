import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index.js";
import Login from "../pages/Login/index.js";
import PageInitial from "../pages/PageInitial/index";
import Register from "../pages/Register/index.js";
import { getData } from "../services/handleData.js";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (getData()?.token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <PageInitial authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
