<template>
  <div>
    <update-form/>
  </div>
</template>

<script>

import UpdateForm from "@/components/UpdateForm";
export default {
  name: 'EditPage',
  components: {UpdateForm},
  async mounted() {
    await this.$store.dispatch('actionGetOneTodoFromApi',this.$route.params.id);
  },
}
</script>
