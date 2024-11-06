export { removePerson } from "../reducers/PersonSlice";
import axios from "../../utils/Axios";
import { loadPerson } from "../reducers/PersonSlice";

export const asyncLoadPerson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalIds = await axios.get(`/person/${id}/external_ids`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const personAllDataCon = {
      detail: detail.data,
      externalIds: externalIds.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
      combinedCredits: combinedCredits.data,
    };
    dispatch(loadPerson(personAllDataCon));
    // console.log(personAllDataCon);
  } catch (error) {
    console.log(error);
  }
};
