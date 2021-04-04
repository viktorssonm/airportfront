import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "../store";
import ShowWeather from "./Pages/ShowWeather/ShowWeather";
import { Router, Switch, Route } from "react-router-dom";
import { SelectAirportsPage } from "./Pages/SelectAirports/SelectAirportsPage";
import { LoginPage } from "./Pages/AuthPages/LoginPage";
import { SignupPage } from "./Pages/AuthPages/SignupPage";
import history from "../Services/history";
import { PrivateRoute } from "./Pages/AuthPages/PrivateRoute";
import { useEffect } from "react";
import { User } from "../store/airports/types";
import { ActionType } from "../store/actions";

const App = () => {
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user: User = JSON.parse(userData);
      store.dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: user,
      });
    }
  });

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <PrivateRoute path="/selectairports" component={SelectAirportsPage} />
          <PrivateRoute path="/showweather" component={ShowWeather} />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
