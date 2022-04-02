<script>

export default {
  name: 'GetDataFromApi',
  async mounted() {
    await this.$store.dispatch('actionGetTodoFromApi');
  },
}

</script>

<template>
<div></div>
</template>



