import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "../store";
import SelectAirports from "./Pages/SelectAirports/SelectAirports";
import ShowWeather from "./Pages/ShowWeather/ShowWeather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/selectairports">
            <SelectAirports />
          </Route>
          <Route path="/showweather">
            <ShowWeather />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
