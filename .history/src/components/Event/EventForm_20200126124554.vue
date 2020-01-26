<template>
    <div>

           <v-form>
    <v-container class = "formpos">
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Regular"
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Regular"
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Filled"
            filled
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Filled"
            filled
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Outlined"
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Outlined"
            outlined
            readonly
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
    </div>
</template>

<script>
export default {
  name: "EventForm",
  data: () => ({
    return: {}
  })
};
</script>

<style lang="scss" scoped>
h1 {
  justify-content: center;
  text-align: center;
}
.formpos {
    padding: 82px;
    margin-right: initial;
}
</style>