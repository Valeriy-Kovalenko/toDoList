<template>
  <div class="table">
    <header class="table__header">
      <div class="table__item header__description">Описание</div>
      <div class="table__item header__status">Статус</div>
      <div class="table__item header__date">Дата</div>
    </header>
    <ul class="table__list">
      <li v-for="task in getTasks">
        <input type="checkbox" :checked="task.status === 'Выполнено'" @click="changeStatus($event, task)">
        <div class="table__item list__description"> {{ task.description }}</div>
        <div class="table__item list__status">{{ task.status }}</div>
        <div class="table__item list__date">{{ task.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empty: null,
    };
  },
  computed: {
    getTasks() {
      return this.$store.getters['getTasks'];
    },
  },
  methods: {
    changeStatus(event, task) {
      const currentStatus = event.target.checked ? task.status = "Выполнено" : task.status = "В работе";
      const data = {
        status: currentStatus,
        id: task.id,
      };
      console.log(data);
      this.$store.dispatch("changeTaskStatus", data);
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
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
  border-left: solid 1px #C4C4C4;
  border-right: solid 1px #C4C4C4;
  width: 70%;
  margin-left: 60px;
}

.header__status {
  width: 20%;
  border-right: solid 1px #C4C4C4;
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
  width: 60px;
}
.list__description {
  width: 70%;
}

.list__status {
  width: 20%;
}
</style>