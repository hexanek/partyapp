<template>
    <div>
      <v-dialog></v-dialog>
    </div>
</template>

<script>
export default {
  name: "PopupDetails",

  data: () => ({
    loading: false,
    selection: 1
  }),
  methods: {
    reserve: function() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>