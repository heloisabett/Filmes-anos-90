<template>
  <div class="esquerda">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Filmes</a>
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
    <h1>Netflix</h1>
  </div>
</template>
<style scoped>
.central {
  text-decoration: none;
  padding-right: 47%;
}
.central h1 {
  color: rgb(255, 0, 0);
  font-family: sans-serif;
  text-decoration: none;
  font-size: 3em;
}
</style>
