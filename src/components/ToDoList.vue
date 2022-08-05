<template>
  <div class="main">
    <the-dialog v-if="showModal" @close="closeModal"></the-dialog>
    <header class="main__header">
      <h2>To Do List</h2>
      <button @click="openModal">
        <img src="src/assets/vue.svg" alt="Добавить новую задачу" />
      </button>
    </header>
    <div class="main"></div>
  </div>
</template>

<script>
import TheDialog from "./TheDialog.vue";
export default {
  components: {
    TheDialog,
  },
  data() {
    return {
      showModal: false,
      };
    },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
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
