<script>
import { ref } from "vue";
const URL = "http://localhost:8081/";

export default {
  setup() {
    const state = ref(false);

    async function handleRelay(newState) {
      state.value = newState;
      const valueString = state.value ? "1" : "0";
      try {
        const response = await fetch(`${URL}relay/${valueString}`, {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        });
        const data = await response.json();
        state.value = data.status;
      } catch (error) {
        console.log(error);
      }
    }

    return {
      state,
      handleRelay,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 v-bind:class="state === false ? 'red' : 'green'">
      <strong>Estado:</strong> {{ state === true ? "Encendido" : "Apagado" }}
    </h1>
    <button class="btn btn-green" @click="handleRelay(true)">Encender</button>
    <button class="btn btn-red" @click="handleRelay(false)">Apagar</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #1c1b20;
  display: flex;
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
}

.btn {
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  color: white;
  font-weight: bold;
}

.btn-red {
  background-color: #cb3541;
}

.btn-green {
  background-color: rgb(14, 140, 14);
}

.btn:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}
.red {
  color: #cb3541;
}
.green {
  color: rgb(14, 140, 14);
}
</style>
