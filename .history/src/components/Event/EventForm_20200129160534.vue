<template>
    <div class="content">
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
                                name="imageUrl"
                                label="Image"
                                required
                                id="image"
                                v-model="imageUrl"
                                ></v-text-field>
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
                                <v-text-field 
                                name="description"
                                label="Description"
                                id="description"
                                rows="2"
                                v-model="description"
                                required></v-text-field>
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
                            <v-row>
                              <v-col cols="12" sm="6" md="5">
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
                                </v-col>
                                </v-row>
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
    </div>
</template>

<script>
export default {
  name: "EventForm",
  data() {
    return {
      title: "",
      location: "",
      description: "",
      imageUrl: "",
      types: [
        "Event",
        "Club",
        "Bar/Restaurant",
        "Open Air",
        "Concert",
        "Local/House Party"
      ],
      pay: false,
      dresscode: false,
      dress: "",
      cash: "",
      eventType: "",
      lat: "",
      lng: "",
      date: new Date().toISOString().substr(0, 10),
      menuDate: false,
      menuTime: false,
      time: ""
    };
  },
  computed: {
    isValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.description !== "" &&
        this.eventType !== ""
      );
    }
  },
  methods: {
    searchLocation: function() {
      //   this.initMap;
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: this.location }, (results, status) => {
        if (status === "OK") {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
        }
      });
    },
    onAddEvent: function() {
      const eData = {
        title: this.title,
        description: this.description,
        location: this.location,
        imageUrl: this.imageUrl,
        eventType: this.eventType,
        cash: this.cash,
        dress: this.dress,
        lat: this.lat,
        lng: this.lng
      };
      this.$store.dispatch("addEvent", eData);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  justify-content: center;
}
.select {
  padding-top: 28px;
  padding-right: 50px;
}
</style>