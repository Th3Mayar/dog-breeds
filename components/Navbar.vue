<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dogs">Dogs</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/panel">Panel</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 10px;
  height: 80px;
  justify-content: center;
  align-items: center;
}
ul {
  background-color: rgb(28, 93, 20);
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
}
li {
  color: rgb(255, 255, 255);
}
li:hover {
  color: rgb(198, 248, 194);
  border-bottom: 5px solid rgb(255, 255, 255);
}
li {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

li:hover:hover,
li:hover:focus,
li:hover:active {
  transform: scale(1.1);
}
</style>
