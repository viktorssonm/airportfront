import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchForAirports = (searchString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FOR_AIRPORTS,
      payload: searchString,
    });

    try {
      const { data, status } = await axios.get(
        "https://localhost:5001/api/airport/search",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE1MjI3NjI1LCJleHAiOjE2MTU4MzI0MjUsImlhdCI6MTYxNTIyNzYyNX0.5jpPnQOQJGRtX3v6I9jy2b_H0J8BAM6hH-JHbo2XU9TWaeGR0yG7e1J9r4v_idvJEtaa_PNTkt893B8C6TWsIQ",
          },
          params: {
            SearchTerm: searchString,
          },
        }
      );
      if (status === 200) {
        dispatch({
          type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS,
          payload: data,
        });
      }

      // Test part below
    } catch (err) {
      console.log(err);
    }
  };
};
