<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <form @submit.prevent="onSignIn">
        
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field
                                            name="email"
                                            label="Email"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required
                                            >

                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
                                     <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required
                                            >

                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
                            
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-btn type="submit"> Sign up</v-btn>
                                        </v-flex>
                                    </v-layout>

                                </form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            
        },
        methods: {
            onSignin() {
                this.$store.dispatch('signInUser', {email: this.email, password: this.password})
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>