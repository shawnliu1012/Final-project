<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/explore">Explore</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/shoppingcart">Shoppingcart</router-link>
    
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
// <script>
// import { defineComponent } from '@vue/composition-api'

// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

// export default {
//   reated(){
//   Vue.axios.get('http://localhost:3000/products').then((response) => {
//     console.log(response.data)
//   })
// },
// }
// </script>
