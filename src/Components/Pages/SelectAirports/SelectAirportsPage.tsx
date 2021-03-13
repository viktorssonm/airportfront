import React from "react";
import { AirportLists } from "./AirportLists";
import { SearchAirports } from "./SearchAirports";

export const SelectAirportsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="row pt-1" style={{ minHeight: "90vh" }}>
        <div className="col-md border py-3">
          <SearchAirports />
        </div>
        <div className="col-md border py-3">
          <AirportLists />
        </div>
      </div>
    </div>
  );
};
