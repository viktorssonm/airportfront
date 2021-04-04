import React, { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { searchForAirports } from "../../../store/action-creators";
import { AirportSearchTableRow } from "./AirportSearchTableRow";

export const SearchAirports: React.FC = () => {
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
    <div>
      <form onSubmit={submitForm} className="form-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for Airport"
                aria-label=".form-control"
                id="searchTerm"
                value={searchterm}
                onChange={searchTermChanged}
              ></input>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <div>ICAO</div>
            </th>
            <th>
              <div>Airport Name</div>
            </th>
            <th>
              <div>City</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {airports.map((a) => {
            return <AirportSearchTableRow key={a.ident} airport={a} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
