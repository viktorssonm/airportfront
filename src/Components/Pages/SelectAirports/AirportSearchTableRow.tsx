import React from "react";
import { FcPlus } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addAirportToAirportList } from "../../../store/action-creators";
import { Airport } from "../../../store/airports/types";
import { useTypedSelector } from "../../../store/hooks/reducer";

interface Props {
  airport: Airport;
  key: string;
}

export const AirportSearchTableRow: React.FC<Props> = ({ airport }) => {
  const selectedList = useTypedSelector((state) => {
    return state.airportLists.selectedList;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    if (selectedList == null) return;

    dispatch(addAirportToAirportList(airport, selectedList));
  };

  return (
    <tr className="">
      <td className="align-middle">
        <p className="mb-0">{airport.ident}</p>
      </td>
      <td className="align-middle">
        <p className="mb-0">{airport.name}</p>
      </td>
      <td className="align-middle">
        <p className="mb-0">{airport.municipality}</p>
      </td>
      <td>
        <button
          onClick={handleClick}
          className="btn py-0"
          style={{ fontSize: "1.5rem" }}
        >
          <FcPlus />
        </button>
      </td>
    </tr>
  );
};
