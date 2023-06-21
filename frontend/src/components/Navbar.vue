<template>
    <nav>
      <ul>
        <li @click="navigateTo('adminIndex')" :class="{ active: currentPage === 'Index' }">Index</li>
        <li @click="navigateTo('AccountManagement')" :class="{ active: currentPage === 'AccountManagement' }">AccountManagement</li>
        <li @click="navigateTo('Login'); clearUserInfo()" >Logout</li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: null
      };
    },
    created() {
      this.currentPage = this.$route.name;
    },
    watch: {
      $route(to) {
        this.currentPage = to.name;
      }
    },
    methods: {
      navigateTo(page) {
        this.$router.push({ name: page });
      },
      clearUserInfo(){
        localStorage.setItem('username',null);
        localStorage.setItem('role',null);
      }
    }
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #f2f2f2;
  }
  
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  
  li {
    margin-right: 10px;
    cursor: pointer;
  }
  
  li.active {
    font-weight: bold;
  }
  </style>
  