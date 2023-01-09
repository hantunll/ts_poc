<template>
  <div>
    <header class="bg-gradient d-flex justify-content-center" style="background-color:#43a98b;" >
      <ul class="nav nav-pill p-2">
          <router-link to="/home" class="text-decoration-none fw-bold  titleDecoratioin" >
              合作金庫
          </router-link>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.titleDecoratioin {
  font-size: 32px;
  color:hsl(154, 38%, 84%);
  font-family:serif;
}

.headerFlex {
  display: flex;
  justify-content: center;
}

.heading {
  font-family: "Mythical Snow";
  font-size: 4em;
  color: #6a7363;
}

nav a {
  font-weight: bold !important;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffe0 !important;
}
</style>