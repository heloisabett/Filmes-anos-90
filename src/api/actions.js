import axios from "axios";

export default class ActionAPI {
  async getAllAction() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=359348e9e37baf725f6f1fb4e08b6452&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&vote_average.gte=7.5&with_genres=28&with_watch_monetization_types=flatrate"
    );
    return data.actions;
  }
}
