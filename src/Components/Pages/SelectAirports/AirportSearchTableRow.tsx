import React from "react";
import { FcPlus } from "react-icons/fc";
import { Airport } from "../../../store/airports/types";

interface Props {
  airport: Airport;
}

export const AirportSearchTableRow: React.FC<Props> = (props) => {
  return (
    <tr>
      <td className="align-middle">
        <p className="mb-0">{props.airport.ident}</p>
      </td>
      <td className="align-middle">
        <p className="mb-0">{props.airport.gpsCode}</p>
      </td>
      <td className="align-middle">
        <p className="mb-0">{props.airport.name}</p>
      </td>
      <td>
        <button className="btn" style={{ fontSize: "1.5rem" }}>
          <FcPlus />
        </button>
      </td>
    </tr>
  );
};
