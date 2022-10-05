import axios from "axios";

export default class GenreAPI {
  async getAllGenres() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=359348e9e37baf725f6f1fb4e08b6452&language=pt-BR"
    );
    return data.genres;
  }
}
