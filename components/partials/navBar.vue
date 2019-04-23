<template>
  <div class="nav-bar">
    <nuxt-link class="logo" to="/">
      SHOPMATE
    </nuxt-link>
    <div class="links">
      <nuxt-link v-for="({ name, department_id }) in departments" :key="department_id" :to="$route.path" v-text="name" />
    </div>
    <form class="search" @submit.prevent>
      <img src="/svg/search-white.svg" alt="search" class="icon">
      <input type="search">
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      departments: 'metas/departments'
    })
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: $dark;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;

  .logo {
    font-size: 1.5rem;
    color: $accent;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: white;
  }

  .links {
    a {
      padding: 0 1rem;
      font-size: .9rem;
    }
  }

  .search {
    display: grid;
    grid-template-columns: 1rem 1fr;
    align-items: center;
    // height: 2rem;
    padding: .25rem .35rem;
    background: $light-grey;
    border-radius: 1rem;
    width: 15rem;

    .icon {
      cursor: pointer;
      width: 1.15rem;
    }

    input {
      width: 100%;
      border: none;
      border-radius: 1rem;
      background: none;
      padding-left: .25rem;
      color: white;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
