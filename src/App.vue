<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::-webkit-scrollbar {
  width: 18px;
  background-color: #ededed;
  border-radius: 0px 4px 4px 0px;
}
::-webkit-scrollbar-button:single-button:vertical:decrement {
  height: 9px;
  width: 5px;
  background-position: center 4px;
  background-image: url("./assets/icons/scrollbarArrowUp.svg");
  background-position: center;
  background-repeat: no-repeat;
}

::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  background-image: url("./assets/icons/scrollbarArrowUpInactive.svg");
}
::-webkit-scrollbar-button:single-button:vertical:decrement:active {
  background-image: url("./assets/icons/scrollbarArrowUpInactive.svg");
}

::-webkit-scrollbar-button:single-button:vertical:increment {
  height: 9px;
  width: 5px;
  background-position: center 2px;
  background-image: url("./assets/icons/scrollbarArrowDown.svg");
  background-position: center;
  background-repeat: no-repeat;
}

::-webkit-scrollbar-button:single-button:vertical:increment:hover {
  background-image: url("./assets/icons/scrollbarArrowDownInactive.svg");
}

::-webkit-scrollbar-button:single-button:vertical:increment:active {
  background-image: url("./assets/icons/scrollbarArrowDownInactive.svg");
}

::-webkit-scrollbar-thumb {
  background: #527884;
  border-radius: 7px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>
