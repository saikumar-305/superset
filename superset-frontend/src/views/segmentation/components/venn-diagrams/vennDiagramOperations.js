import axios from "axios.js";
import API_PATHS from "app/constants/apiPaths";

const getVennReport = (segmentIDs) => {
  return axios.get(`${API_PATHS.SEGEMENTATION.GET_VENN_REPORT}/${segmentIDs}`);
};

export { getVennReport };
