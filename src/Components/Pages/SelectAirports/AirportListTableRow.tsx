import { Airport } from "../../../store/airports/types";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteAirportFromAirportList } from "../../../store/action-creators";
import { useTypedSelector } from "../../../store/hooks/reducer";

interface Props {
  airport: Airport;
  key: string;
}

export const AirportListTableRow: React.FC<Props> = ({ airport }) => {
  const dispatch = useDispatch();
  const selectedList = useTypedSelector((state) => {
    return state.airportLists.selectedList;
  });

  // Handler for deleting airport.
  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    // Check if selected list is null, should not be possible.
    if (selectedList == null) return;

    dispatch(deleteAirportFromAirportList(selectedList, airport));
  };

  return (
    <tr>
      <td className="align-middle">{airport.ident}</td>
      <td className="align-middle">{airport.name}</td>
      <td className="align-middle">{airport.municipality}</td>
      <td className="align-middle">
        <button className="btn" onClick={onClickHandler}>
          <TiDeleteOutline style={{ color: "red", fontSize: "1.5rem" }} />
        </button>
      </td>
    </tr>
  );
};
