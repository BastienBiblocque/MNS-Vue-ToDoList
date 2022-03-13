<template>
  <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

    <div class="mb-2 sm:mb-0 flex flex-row
  ">
      <div class="h-10 w-10 self-center mr-2">
        <img class="h-10 w-10 self-center" src="../../public/logo.jpg" />
      </div>
      <div>
        <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Bastien Biblocque</a><br>
        <span class="text-xs text-grey-dark">Todo list en Vue / express</span>
      </div>
    </div>

    <div class="sm:mb-0 self-center space-x-4">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/todo">Go to todo list</router-link>
    </div>
  </nav>

</template>

<script>

export default {
  name: 'navbar-default',
}

</script>