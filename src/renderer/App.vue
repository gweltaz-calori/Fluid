<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Exo";
  text-decoration: none;
  user-select: none;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
}

body {
  background-color: #131313;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}

input {
  outline: 0;
  border: 0;
}

button {
  border: 0;
  outline: 0;
  background: transparent;
}
</style>
