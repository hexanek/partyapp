<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs-12 offset-sm3>
                    <h2>Add own Event</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs-12>
                    <form>
                        <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-12> 
                                <v-text-field 
                                name="title"
                                label="Title"
                                id="title"
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6> 
                                <v-text-field 
                                name="location"
                                label="Location"
                                id="location"
                                prepend-icon="mdi-place"
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 lg-6> 
                                <v-text-field 
                                name="imageUrl"
                                label="Image"
                                required
                                id="image"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6> 
                                <v-text-field 
                                name="description"
                                label="Description"
                                id="description"
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
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

</style>