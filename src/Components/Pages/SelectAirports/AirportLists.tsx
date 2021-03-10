import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  selectAirportList,
  getAirportListsForUser,
} from "../../../store/action-creators";
import { useTypedSelector } from "../../../store/hooks/reducer";
import { AirportSearchTableRow } from "./AirportSearchTableRow";

export const AirportLists: React.FC = () => {
  // Using custom typed hooks to connect to redux store
  const airportLists = useTypedSelector(
    (state) => state.airportLists.allAirportLists
  );
  const selectedAirportList = useTypedSelector(
    (state) => state.airportLists.selectedList
  );

  // Prepare dispatch hoook.
  const dispatch = useDispatch();

  useEffect(() => {
    // Get all lists for current user
    dispatch(getAirportListsForUser());
  }, [dispatch]);

  // Handle change in option menu, send selected aiport ID to redux state
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const airportListToSetActive = airportLists.find(
      (list) => list.id === e.target.value
    );

    // Dispatch Select airport list
    if (airportListToSetActive) {
      dispatch(selectAirportList(airportListToSetActive));
    }
  };

  return (
    <div>
      <select className="form-select" onChange={handleChange}>
        {airportLists.length > 0 &&
          airportLists.map((airportList) => (
            <option key={airportList.id} value={airportList.id}>
              {airportList.listName}
            </option>
          ))}
      </select>
      <table className="table table-striped mt-3">
        <tbody>
          {selectedAirportList &&
            selectedAirportList.airports.map((airport) => (
              <AirportSearchTableRow airport={airport} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
