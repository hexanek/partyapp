<template>
    <div class="content">
        <v-container mt-12 pt-4>
            <v-layout row>
                <v-flex xs-12 offset-sm3 center>
                    <h2>Add own Event</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs-12>
                    <form>
                        <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-5> 
                                <v-text-field 
                                name="title"
                                label="Title"
                                id="title"
                                row-height-1
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-5> 
                                <v-text-field 
                                name="location"
                                label="Location"
                                id="location"
                                required></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 col-5> 
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
.content {
  justify-content: center;
}
</style>