<template>
    <v-dialog persistent>
        <v-btn fab primary slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
    
    
        <v-container mt-12 pt-6>
            <v-layout row>
                <v-flex xs-12 offset-sm3 center pa-2>
                    <h2>Add own Event</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs-12>
                    <form @submit.prevent="onAddEvent">
                        <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-4> 
                                <v-text-field 
                                name="title"
                                label="Title"
                                id="title"
                                row-height="15"
                                v-model="title"
                                required></v-text-field>
                            </v-flex>
                            <v-select class="select"
                                 :items="this.types"
                                  label="Event Type"
                                  name="Event-Type"
                                  v-model="eventType"
                                   dense
                                 ></v-select>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-4> 
                                <v-text-field 
                                name="location"
                                label="Location"
                                id="location"
                                placeholder="Świętojańska 8"
                                v-model="location"
                                v-on:change="searchLocation()"
                                required></v-text-field>
                            </v-flex>
                            <v-checkbox
                               v-model="pay"
                                  hide-details
                                class="shrink mr-2 mt-5"
                               ></v-checkbox>
                               <v-text-field 
                               class="select"
                               prefix="$"
                               :disabled="!pay"
                               label="Pay required"
                               v-model="cash"></v-text-field>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 col-4> 
                                <v-text-field 
                                name="description"
                                label="Description"
                                id="description"
                                rows="2"
                                v-model="description"
                                required></v-text-field>
                            </v-flex>
                             <v-checkbox
                               v-model="dresscode"
                                  hide-details
                                class="shrink mr-2 mt-5"
                               ></v-checkbox>
                               <v-text-field 
                               class="select"
                               :disabled="!dresscode"
                               value="Smart Casual"
                               label="Dresscode"
                               v-model="dress"></v-text-field>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 col-4> 
                                
                                <v-btn raised @click="onPickFile">Upload Image</v-btn>
                                <input type="file" style="display: none" ref="fileInput" accept="image/*"
                                @change="onPicked"
                                >
                            </v-flex>
                            <v-col cols="12" sm="6" md="4">
                                <v-menu
                                v-model="menuDate"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                                                    >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Date"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" @input="menuDate = false"></v-date-picker>
                            </v-menu>
                            </v-col>
                           </v-layout>
                            <v-layout row>
                              <v-flex xs-12 offset-sm7 offset-lg7 sm-3 col-4>
                                  <v-spacer></v-spacer>
                                <v-menu
                                    ref="menu"
                                    v-model="menuTime"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="time"
                m                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                                            >
                                    <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="time"
                                        label="Time"
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-time-picker
                                    v-if="menuTime"
                                    v-model="time"
                                    full-width
                                    @click:minute="$refs.menu.save(time)"
                                    ></v-time-picker>
                                </v-menu>
                                </v-flex>
                                </v-layout>
                        <v-layout row>
                            <v-flex xs12 offset-sm3 sm-3 col-4>
                                <v-btn :disabled="!isValid"
                                type="submit">Add Event</v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- <v-container v-model="initMap">
             <script
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY">
</script>
        </v-container> -->
        <GmapMap
      :zoom="14"
      :center="{lat: 52.32, lng: 43.21}"
      map-type-id="roadmap"
      style="width: 10px; height: 10px;"

    >
    </GmapMap>
    </v-dialog>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>