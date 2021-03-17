import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "../store";
import ShowWeather from "./Pages/ShowWeather/ShowWeather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SelectAirportsPage } from "./Pages/SelectAirports/SelectAirportsPage";
import { LoginPage } from "./Pages/AuthPages/LoginPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/selectairports">
            <SelectAirportsPage />
          </Route>
          <Route path="/showweather">
            <ShowWeather />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
