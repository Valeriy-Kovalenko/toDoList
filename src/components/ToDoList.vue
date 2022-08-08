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
    <div class="table">
      <header class="table__header">
        <div class="table__header__description">Описание</div>
        <div class="table__header__status">Статус</div>
        <div class="table__header__date">Дата</div>
      </header>
      <ul class="table__list">
        <li v-for="task in tasks">
          <input type="checkbox">
          <div>{{ task.description }}</div>
          <div>{{ task.status }}</div>
          <div>{{ task.date }}</div>
        </li>
      </ul>
    </div>
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
      tasks: [
        { description: 'first desc', status: 'done', date: new Date().getDate() },
        { description: 'second desc', status: 'in process', date: new Date().getDate() },
      ],
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
  margin: 10px 0;
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

.table {
  width: 100%;
  /*80px 937px 151px 129px / 1300px*/
}

.table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  height: 35px;
}

.table__header div {
  padding: 0 20px;
  font-family: 'Vela Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 200%;
}

.table__header__description {
  border-left: solid 1px #C4C4C4;
  border-right: solid 1px #C4C4C4;
  width: 75%;
  margin-left: 60px;
}

.table__header__status {
  width: 15%;
  border-right: solid 1px #C4C4C4;
}
.table__header__date {
  width: 15%;
}

.table__list {
  padding: 0;
  width: 100%;
}

.table__list li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.table__list input {
  width: 60px;
}

.table__list {}
</style>
