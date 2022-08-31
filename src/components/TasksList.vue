<template>
  <div class="table">
    <header class="table__header header">
      <div class="table__item header__description">Описание</div>
      <div class="table__item header__status">Статус</div>
      <div class="table__item header__date">Дата</div>
    </header>
    <ul class="table__list list">
      <li v-for="task in tasks">
        <input type="checkbox" :checked="task.status === 'Выполнено'" @click="changeStatus($event, task)">
        <div class="table__item list__description"> {{ task.description }}</div>
        <div :class="{table__item: true, list__status: task.status === 'В работе', list__status__done: task.status === 'Выполнено'}">{{ task.status }}</div>
        <div class="table__item list__date">{{ task.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
  methods: {
    changeStatus(event, task) {
      const currentStatus = event.target.checked ? task.status = "Выполнено" : task.status = "В работе"; // ПЕРЕПИСАТЬ В КОМПУТЕД?
      const data = {
        status: currentStatus,
        id: task.id,
      };

      this.$store.dispatch("changeTaskStatus", data);
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  font-family: 'Vela Sans', sans-serif;
  /*80px 937px 151px 129px / 1300px*/
}

.table__header {
  display: flex;
  align-items: center;
  margin: 15px 0;
  height: 35px;
}

.table__item {
  padding: 0 20px;
}

.table__header .table__item {
  font-family: 'Vela Sans', sans-serif;
  font-size: 14px;
  line-height: 200%;
}

.header__description {
  border-left: solid 1px #dad9d9;
  border-right: solid 1px #dad9d9;
  width: 70%;
  margin-left: 60px;
}

.header__status {
  width: 20%;
  border-right: solid 1px #dad9d9;
}
.header__date, .list__date {
  width: 15%;
}

.table__list {
  padding: 0;
}
.table__list li {
  display: flex;
}
.table__list input {
  /*width: 60px;*/
  height: 20px;
  width: 20px;
  margin: 0 20px;
}
.list li {
  border-top: 1px solid #dad9d9;
  display: flex;
  align-items: center;
  height: 58px;
}
.list li:last-child {
  border-bottom: 1px solid #dad9d9;
}
.list__description {
  width: 70%;
}
.list__status {
  width: 20%;
  color: #F89B11;
}
.list__status__done {
  width: 20%;
  color: #134EC1;
}
</style>