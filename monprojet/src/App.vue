<template>

  <div id="app">
    <navbar-default/>
    <router-view></router-view>
    <footer-default/>

  </div>
</template>
<script>
import FooterDefault from "@/components/FooterDefault";
import NavbarDefault from "@/components/NavbarDefault";
export default {
  components: {NavbarDefault, FooterDefault}
}
</script>