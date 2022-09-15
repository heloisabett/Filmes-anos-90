<template>
  <header>
    <div class="logo"></div>
    <div class="menucentral">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <!-- <span>|</span> -->
      <span><RouterLink to="/acao">Ação</RouterLink></span>
      <!-- <span>|</span> -->
      <span><RouterLink to="/comedia">Comédia</RouterLink></span>
      <!-- <span>|</span> -->
      <span><RouterLink to="/terror">Terror</RouterLink></span>
      <!-- <span>|</span> -->
      <span><RouterLink to="/romance">Romance</RouterLink></span>
    </div>
    <div class="user"></div>
  </header>
</template>
<style scoped>
  header {
    height: 5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    text-align: center;
    background-color: rgb(66, 62, 62);
  }

  .menucentral a{
    color: white;
    text-decoration: none;
    font-size: 1.2em;
  }

  header span {
    padding: 0 20px;
  }
  span {
    color: aliceblue;
  }
  </style>
