import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAirportListsForUser,
  getWeatherReportsForList,
} from "../../../store/action-creators";
import { useTypedSelector } from "../../../store/hooks/reducer";

const ShowWeather: React.FC = () => {
  const airportLists = useTypedSelector(
    (state) => state.airportLists.allAirportLists
  );

  const listWeather = useTypedSelector((state) => state.airportWeather.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirportListsForUser());
  }, [dispatch]);

  const handleSelectAirportList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedList = airportLists.find((a) => {
      return a.id === e.target.value;
    });

    dispatch(getWeatherReportsForList(selectedList!));
  };

  return (
    <div className="container">
      <div className="row pt-4 col-sm w-50 col-centered mx-auto">
        <select className="form-select" onChange={handleSelectAirportList}>
          <option>Select Airport List to show weather for</option>
          {airportLists.length > 0 &&
            airportLists.map((airportList) => {
              return (
                <option key={airportList.id} value={airportList.id}>
                  {airportList.listName}
                </option>
              );
            })}
        </select>
      </div>
      <div className="row pt-4 col-sm">
        {listWeather.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Ident</th>
                <th>Time</th>
                <th>Metar</th>
              </tr>
            </thead>
            <tbody>
              {listWeather.map((list) => {
                const metarDate = new Date(list.createdAt);
                return (
                  <tr key={list.id}>
                    <td>{list.airportIdent}</td>
                    <td>
                      {metarDate.toLocaleDateString() +
                        " " +
                        metarDate.toLocaleTimeString()}
                    </td>
                    <td>{list.raw_Metar}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowWeather;
