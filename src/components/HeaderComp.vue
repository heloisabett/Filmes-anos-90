<template>
  <header>
    <div class="esquerda">
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
    </div>
    <div class="central">
      <h1>Cine90</h1>
    </div>
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
  background-color: black;
}

.central {
  color: rgb(233, 150, 111);
  text-decoration: none;
  font-size: 1.6em;
  padding-right: 47%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
