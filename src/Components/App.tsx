import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import SelectAirports from "./Pages/SelectAirports/SelectAirports";

const App = () => {
  return (
    <div>
      <NavBar />
      <SelectAirports />
    </div>
  );
};

export default App;
