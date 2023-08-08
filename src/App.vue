<template>
  <div id="nav">
    <router-link to="/Navbar" ></router-link>
  </div>
  <Navbar></Navbar>
  <router-view/>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>