<template>
    <v-dialog fullscreen :overlay=false>
        <v-btn fab slot="activator">
        <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit Event</v-card-title>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-dialog {
  position: relative;
}
</style>