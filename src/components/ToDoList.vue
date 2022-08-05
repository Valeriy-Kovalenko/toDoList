<template>
  <div class="main">
    <the-dialog v-if="showModal" @close="closeModal"></the-dialog>
    <header class="header">
      <h2>To do list</h2>
      <button @click="openModal">
        <img src="src/assets/plus.png" alt="Добавить новую задачу" />
      </button>
    </header>
    <div class="filter">
      <div class="filter__search">
        <img src="src/assets/search.svg" alt="Поиск"/>
        <input type="search" placeholder="Поиск ID, Имени, статуса или даты">
      </div>
      <div class="filter__sort">
        <span>Сортировать по:</span>
        <select>
          <option>Дата</option>
          <option>Статус</option>
        </select>
      </div>
    </div>
    <div class="list"></div>
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 150px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header button, header img {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
}
.header button {
  background-color: #D6DBEB;
}
.header img {
  width: 50%;
  height: 50%;
}

.filter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
}
.filter__search {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 60%
}
.filter__search img {
  height: 100%;
  margin-right: 10px;
}
.filter__search input {
  border: none;
  width: 100%;
}
.filter__sort span {
  margin-right: 10px;
}
.filter__sort select {
  border: none;
  background-color: white;
}
</style>
