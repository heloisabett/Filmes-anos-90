<script>
// import PostComp from "../components/PostComp.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useActionStore } from "@/stores/actions";
export default {
  async created() {
    await this.get_actions();
  },
  computed: {
    ...mapStores(useActionStore),
    ...mapState(useActionStore, ["actions"]),
  },
  methods: {
    ...mapActions(useActionStore, ["get_actions"]),
  },
};
</script>
<template>
  <h1>Ação</h1>
  <!-- <br />
  <br />
  <PostComp />
  <PostComp /> -->
  <p v-for="action of action" :key="action">
    <RouterLink to="/acao">{{ action.name }} - {{ action.id }}</RouterLink>
  </p>
</template>
<style>
h1 {
  color: rgb(99, 37, 37);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding-left: 3%;
  margin-top: 1%;
  font-size: 2.3em;
}
</style>
