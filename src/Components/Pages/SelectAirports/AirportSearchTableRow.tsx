import { FcPlus } from "react-icons/fc";

interface IAirportSearchTableRow {
  Title: string;
}

export const AirportSearchTableRow: React.FC<IAirportSearchTableRow> = (
  airport
) => {
  return (
    <tr>
      <td className="align-middle">
        <h5 className="mb-0">{airport.Title}</h5>
      </td>
      <td>
        <button className="btn" style={{ fontSize: "1.5rem" }}>
          <FcPlus />
        </button>
      </td>
    </tr>
  );
};
