import axios, { AxiosResponse } from "axios";
import { Airport, AirportList, User } from "../store/airports/types";
import history from "./history";

const API_URL = "https://localhost:5001/api/";

class AirportService {
  // Get userinfo from local storage and return user
  getUser() {
    const user: User = JSON.parse(localStorage.getItem("user")!);

    if (user == null) {
      history.push("/login");
    }
    return user;
  }

  // Get all airportlists for user logged in
  async getAirportLists() {
    const user = this.getUser();

    const response: AxiosResponse = await axios.get(
      API_URL + "airportlists/lists",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + user.token,
        },
      }
    );
    return response;
  }

  // Search for airports
  async searchForAirports(searchString: String) {
    const user = this.getUser();
    const response: AxiosResponse = await axios.get(
      API_URL + "airport/search?SearchTerm=" + searchString,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + user.token,
        },
      }
    );
    return response;
  }

  // Create new airportLIst
  async createAirportList(name: String) {
    const user = this.getUser();

    const response: AxiosResponse = await axios.post(
      API_URL + "airportlists/new",
      {
        ListName: name,
      },
      { headers: { Authorization: "Bearer " + user.token } }
    );

    return response;
  }

  // Delete airport from airport list
  async deleteAirportFromList(
    airportList: AirportList,
    airportToDelete: Airport
  ) {
    const user = this.getUser();
    const response: AxiosResponse = await axios.delete(
      API_URL + "airportlists/deleteairport",
      {
        data: {
          Id: airportList.id,
          AirportIdent: airportToDelete.ident,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + user.token,
        },
      }
    );
    return response;
  }

  // Add airport to airport list
  async addAirportToList(airportToAdd: Airport, airportList: AirportList) {
    const user = this.getUser();
    const response: AxiosResponse = await axios.post(
      "https://localhost:5001/api/airportlists/addairport",
      {
        Id: airportList.id,
        AirportIdent: airportToAdd.ident,
      },
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    );
    return response;
  }
}

export default new AirportService();
