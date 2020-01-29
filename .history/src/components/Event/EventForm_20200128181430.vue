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
                    <form>
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
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 offset-sm3 sm-3 col-4>
                                <v-btn :disabled="!isValid">Add Event</v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
        <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
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
      lng: ""
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
    initMap: function() {},
    searchLocation: function() {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.location }, (results, status) => {
        if (status === "OK") {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
        }
      });
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