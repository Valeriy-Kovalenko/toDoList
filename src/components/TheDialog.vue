<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open class="dialog">
      <header class="dialog__header">
        <h3>Создать новую задачу</h3>
        <button>
          <img src="src/assets/close.svg" alt="Закрыть"/>
        </button>
      </header>
      <div>
        <p>Описание</p>
        <input type="text" alt="hello">
      </div>
      <button>Создать</button>
    </dialog>
  </teleport>
</template>

<script>
export default {

}
</script>

<style scoped>
dialog {
  width: 400px;
  height: 280px;
  border: 1px solid #DDE2E4;
  border-radius: 6px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
}
.dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dialog__header h3 {
  height: 24px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
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
</style>