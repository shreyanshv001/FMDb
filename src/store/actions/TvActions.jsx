export { removeTv } from "../reducers/TvSlice";
import axios from "../../utils/Axios";
import { loadTv } from "../reducers/TvSlice";

export const asyncLoadTv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const credits = await axios.get(`/tv/${id}/credits`);
    const TvAllDataCon = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results,
      watchProviders: watchProviders.data.results.IN,
      translations: translations.data,
      credits: credits.data.cast.slice(0, 10),
    };
    // console.log(TvAllDataCon);
    dispatch(loadTv(TvAllDataCon));
  } catch (error) {
    console.error(error);
  }
};
