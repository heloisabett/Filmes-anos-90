<template>
  <header>
    <!-- <div class="logo"></div>
    <div class="menucentral">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span><RouterLink to="/acao">Ação</RouterLink></span>
      <span><RouterLink to="/comedia">Comédia</RouterLink></span>
      <span><RouterLink to="/terror">Terror</RouterLink></span>
      <span><RouterLink to="/romance">Romance</RouterLink></span>
    </div>
    <div class="user"></div> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Filmes anos 90</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><RouterLink to="/acao">Ação</RouterLink></li>
                <li><RouterLink to="/comedia">Comédia</RouterLink></li>
                <li><RouterLink to="/terror">Terror</RouterLink></li>
                <li><RouterLink to="/romance">Romance</RouterLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

.menucentral a {
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
