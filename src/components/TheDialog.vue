<template>
  <teleport to="body">
    <div @click="closeModal" class="backdrop"></div>
    <dialog open class="dialog">
      <header class="dialog__header">
        <h3>Создать новую задачу</h3>
        <button>
          <img src="src/assets/close.svg" alt="Закрыть" @click="closeModal"/>
        </button>
      </header>
      <div class="dialog__main">
        <p>Описание</p>
        <input type="text" placeholder="Введите описание" v-model="description">
      </div>
      <button class="dialog__button" @click="createTask">
        <span>Создать</span>
      </button>
    </dialog>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      description: '',
    }
  },
  methods: {
    closeModal() {
      console.log(this.description);
      this.$emit('close');
    },
    createTask() {
      const data = {
        description: this.description,
        status: "В работе",
        date: this.calcNormalDate(),
      }

      this.$store.dispatch("createNewTask", data);
      this.closeModal();
    },
    calcNormalDate() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return dd + '.' + mm + '.' + yyyy;
    }
  },
}
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 280px;
  border: 1px solid #DDE2E4;
  border-radius: 6px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  color: #16191D;
}

.dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
}
.dialog__header h3 {
  height: 24px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  vertical-align: middle;
  line-height: 132%;
}
.dialog__header button {
  height: 22px;
  text-decoration: none;
  border: none;
  background-color: white;
  padding: 0;
}
.dialog__header img {
  height: 100%;
  border-radius: 5px;
}

.dialog__main p {
  font-family: 'AGAvantGardeCyr Book', arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 5px 0;
}

.dialog__main input {
  width: 320px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DDE2E4;
  border-radius: 8px;
  padding: 11px 16px;
}

.dialog__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  gap: 10px;
  background: #F0F5FF;
  border: none;
  border-radius: 8px;
  margin: 30px;
}

.dialog__button span {
  width: 73px;
  height: 24px;
  font-family: 'Vela Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  color: #314B99;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>