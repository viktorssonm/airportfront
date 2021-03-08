import { AirportSearchTableRow } from "./AirportSearchTableRow";

const SelectAirports: React.FC = () => {
  return (
    <div className="container">
      <div className="row pt-5 pt-3" style={{ minHeight: "80vh" }}>
        <div className="col-md border pt-3">
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="text"
                placeholder="Search for Airport"
                aria-label=".form-control"
              ></input>
            </div>
            <div className="col-auto pb-3">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          <table className="table table-striped">
            <tbody>
              <AirportSearchTableRow Title="ESKM/MXX Mora Siljan" />
              <AirportSearchTableRow Title="ESSA/ARN Stockholm Arlanda" />
              <AirportSearchTableRow Title="ESKM/MXX Mora Siljan" />
            </tbody>
          </table>
        </div>
        <div className="col-md border pt-3">test</div>
      </div>
    </div>
  );
};

export default SelectAirports;
