import { ref } from "vue";
import { defineStore } from "pinia";
import ActionAPI from "../api/actions";
const actionApi = new ActionAPI();

export const useActionStore = defineStore("action", () => {
  const actions = ref([]);
  async function get_actions() {
    actions.value = await actionApi.getAllActions();
  }

  return { actions, get_actions };
});
