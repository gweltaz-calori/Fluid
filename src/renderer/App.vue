<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* exo-regular - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/exo-v6-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Exo Regular"), local("Exo-Regular"),
    url("./assets/fonts/exo-v6-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/exo-v6-latin-regular.svg#Exo") format("svg"); /* Legacy iOS */
}
/* exo-500 - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 500;
  src: url("./assets/fonts/exo-v6-latin-500.eot"); /* IE9 Compat Modes */
  src: local("Exo Medium"), local("Exo-Medium"),
    url("./assets/fonts/exo-v6-latin-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-500.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-500.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./assets/fonts/exo-v6-latin-500.svg#Exo")
      format("svg"); /* Legacy iOS */
}
/* exo-600 - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 600;
  src: url("./assets/fonts/exo-v6-latin-600.eot"); /* IE9 Compat Modes */
  src: local("Exo SemiBold"), local("Exo-SemiBold"),
    url("./assets/fonts/exo-v6-latin-600.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-600.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-600.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./assets/fonts/exo-v6-latin-600.svg#Exo")
      format("svg"); /* Legacy iOS */
}
/* exo-700 - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 700;
  src: url("./assets/fonts/exo-v6-latin-700.eot"); /* IE9 Compat Modes */
  src: local("Exo Bold"), local("Exo-Bold"),
    url("./assets/fonts/exo-v6-latin-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-700.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./assets/fonts/exo-v6-latin-700.svg#Exo")
      format("svg"); /* Legacy iOS */
}
/* exo-800 - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 800;
  src: url("./assets/fonts/exo-v6-latin-800.eot"); /* IE9 Compat Modes */
  src: local("Exo ExtraBold"), local("Exo-ExtraBold"),
    url("./assets/fonts/exo-v6-latin-800.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-800.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-800.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./assets/fonts/exo-v6-latin-800.svg#Exo")
      format("svg"); /* Legacy iOS */
}
/* exo-900 - latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 900;
  src: url("./assets/fonts/exo-v6-latin-900.eot"); /* IE9 Compat Modes */
  src: local("Exo Black"), local("Exo-Black"),
    url("./assets/fonts/exo-v6-latin-900.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/exo-v6-latin-900.woff2") format("woff2"),
    /* Super Modern Browsers */ url("./assets/fonts/exo-v6-latin-900.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/exo-v6-latin-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("./assets/fonts/exo-v6-latin-900.svg#Exo")
      format("svg"); /* Legacy iOS */
}
* {
  box-sizing: border-box;
  font-family: "Exo";
  text-decoration: none;
  user-select: none;

  cursor: default;
}

*:focus {
  outline: none;
}
*::selection {
  background-color: rgb(170, 170, 170);
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
  position: relative;
}

body {
  background-color: #131313;
  overflow: hidden;
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
  padding: 0;
  background: transparent;
}

button {
  border: 0;
  outline: 0;
  background: transparent;
}
</style>
