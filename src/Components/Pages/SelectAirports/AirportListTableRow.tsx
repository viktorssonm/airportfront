import { Airport } from "../../../store/airports/types";
import { TiDeleteOutline } from "react-icons/ti";

interface Props {
  airport: Airport;
  key: string;
}

export const AirportListTableRow: React.FC<Props> = ({ airport }) => {
  return (
    <tr>
      <td className="align-middle">{airport.ident}</td>
      <td className="align-middle">{airport.name}</td>
      <td className="align-middle">{airport.municipality}</td>
      <td className="align-middle">
        <button className="btn">
          <TiDeleteOutline style={{ color: "red", fontSize: "1.5rem" }} />
        </button>
      </td>
    </tr>
  );
};
