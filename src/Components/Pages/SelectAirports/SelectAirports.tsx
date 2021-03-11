import { AirportSearchTableRow } from "./AirportSearchTableRow";
import { AirportLists } from "./AirportLists";
import { searchForAirports } from "../../../store/action-creators";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../../../store/index";
import { useState } from "react";

const SelectAirports: React.FC = () => {
  const typedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const airports = typedSelector((state) => state.airportSearch.data);
  const dispatch = useDispatch();

  const [searchterm, setSearchTerm] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchForAirports(searchterm));
  };

  const searchTermChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="row pt-3" style={{ minHeight: "80vh" }}>
        <div className="col-md  border py-3">
          <form onSubmit={submitForm} className="form-fluid">
            <div className="row">
              <div className="col-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search for Airport"
                  aria-label=".form-control"
                  id="searchTerm"
                  value={searchterm}
                  onChange={searchTermChanged}
                ></input>
              </div>
              <div className="col-auto pb-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <table className="table table-striped">
            <tbody>
              {airports.map((a) => {
                return <AirportSearchTableRow airport={a} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md border py-3">
          <AirportLists />
        </div>
      </div>
    </div>
  );
};

export default SelectAirports;
