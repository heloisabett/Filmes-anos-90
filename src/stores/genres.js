import { ref } from "vue";
import { defineStore } from "pinia";
import GenreAPI from "../api/genres";
const genreApi = new GenreAPI();

export const useGenreStore = defineStore("genre", () => {
  const genres = ref([]);
  async function get_genres() {
    genres.value = await genreApi.getAllGenres();
  }

  return { genres, get_genres };
});
