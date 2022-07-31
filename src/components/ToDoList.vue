<template>
  <div class="main">
    <header class="main__header">
      <h2>To Do List</h2>
      <button @click="openModal">
        <img src="src/assets/vue.svg" alt="Добавить новую задачу" />
      </button>
    </header>
    <div class="main"></div>
  </div>
  <the-dialog></the-dialog>
</template>

<script>
import TheDialog from "./TheDialog.vue";
export default {
  components: {TheDialog},
  methods: {
    openModal() {
      alert('Test!');
    },
  }
};
</script>

<style scoped>
.main__header {
  display: flex;
  justify-content: space-between;
}

.main__header button, img {
  width: 40px;
  height: 40px;
}


</style>
