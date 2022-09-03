<template>
  <div class="main">
    <the-dialog v-if="showModal" @close="closeModal"></the-dialog>
    <header class="header">
      <h2>To do list</h2>
      <button @click="openModal">
        <img src="/src/assets/plus.png" alt="Добавить новую задачу" />
      </button>
    </header>
    <div class="filter">
      <div class="filter__search">
        <img src="/src/assets/search.png" alt="Поиск"/>
        <input type="search" placeholder="Поиск задачи" v-model="currentInput" @input="findTask">
      </div>
      <div class="filter__sort">
        <span>Сортировать по:</span>
        <select v-model="chosenSort" @change="sortBy(chosenSort)">
          <option>Дата</option>
          <option>Статус</option>
        </select>
      </div>
    </div>
    <TasksList :tasks="tasks ? tasks : getAllTasks"></TasksList>
  </div>
</template>

<script>
import TheDialog from "./TheDialog.vue";
import TasksList from "./TasksList.vue";

export default {
  components: {
    TasksList,
    TheDialog,
  },
  data() {
    return {
      showModal: false,
      currentInput: "",
      tasks: null,
      chosenSort: "",
      };
    },
  async created() {
    await this.$store.dispatch("loadAllTasks");
    await this.$store.dispatch("loadSelectedOption");
    await this.getCurrentStatus();
  },
  computed: {
    getAllTasks() {
      return this.$store.getters['getTasks'];
    },
  },
  methods: {
    sortBy(value) {
      value === "Дата" ? value = "date" : value = "status";
      const tasks = this.$store.getters['getTasks'];

      const newTasks = tasks.sort((a, b) => {
        if (value === "status") {
          return (a.status < b.status) ? 1 : -1;
        }
        const [firstValue, secondValue] = [a, b].map(el => {
          return el.date.split(".").reduce((sum, current, index) => {
            if (index === 1) return sum + (Number(current) * 30);
            if (index === 2) return sum + (Number(current) * 365);
            return sum + Number(current);
          }, 0);
        });
        return firstValue - secondValue;
      });

      this.$store.dispatch("sortAllTasks", newTasks);
      this.$store.dispatch("changeSelectedOption", value);

    },
    findTask() {
      const tasks = this.$store.getters["getTasks"];

      this.tasks = tasks.filter(el => el.description.includes(this.currentInput));
    },
    getCurrentStatus() {
      this.$store.getters["getOption"] === "date" ? this.chosenSort = "Дата" : this.chosenSort = "Статус";
    },
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
  font-family: "Montserrat", sans-serif;
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
  position: relative;
}
.header img {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.filter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin: 10px 0;
  font-family: 'Vela Sans', sans-serif;
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
