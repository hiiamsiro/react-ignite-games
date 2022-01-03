import axios from "axios";
import {
  newGamesURL, popularGamesURL,
  upcomingGamesURL
} from "../api";

//Redux toolkit: Slice (reducers and actions)
//Action -> Reducer -> Views
//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};


