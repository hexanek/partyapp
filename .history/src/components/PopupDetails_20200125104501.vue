<template>
    <div>
      <v-col
        md="4"
        offset-md="8"
      >
        <v-dialog>
          
        </v-dialog>
  </v-col>
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