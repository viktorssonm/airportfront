import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectAirportList,
  getAirportListsForUser,
  addAirportList,
} from "../../../store/action-creators";
import { useTypedSelector } from "../../../store/hooks/reducer";
import { AirportListTableRow } from "./AirportListTableRow";

export const AirportLists: React.FC = () => {
  // Local state for new list page
  const [listOpen, toggleListOpen] = useState(false);
  const [newListName, setNewListName] = useState("");

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
    // Get all lists for current user in inital page load.
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

  const handleNewListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addAirportList(newListName));
    setNewListName("");
    toggleListOpen(false);
  };

  const handleListNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewListName(e.target.value);
  };

  return (
    <>
      {!listOpen && (
        <div>
          <div className="row">
            <div className="col-sm">
              <div className="input-group">
                <select className="form-select" onChange={handleChange}>
                  {airportLists.length > 0 &&
                    airportLists.map((airportList) => (
                      <option key={airportList.id} value={airportList.id}>
                        {airportList.listName}
                      </option>
                    ))}
                </select>
                <button className="btn btn-outline-danger">Delete List</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    toggleListOpen(true);
                  }}
                >
                  New List
                </button>
              </div>
            </div>
          </div>
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
              {selectedAirportList &&
                selectedAirportList.airports.map((airport) => (
                  <AirportListTableRow key={airport.ident} airport={airport} />
                ))}
            </tbody>
          </table>
        </div>
      )}
      {listOpen && (
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleNewListSubmit}>
              <div className="input-group">
                <input
                  value={newListName}
                  onChange={handleListNameChange}
                  type="text"
                  className="form-control"
                  id="listName"
                  placeholder="Name for new list"
                ></input>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    toggleListOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-outline-primary">Save List</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
