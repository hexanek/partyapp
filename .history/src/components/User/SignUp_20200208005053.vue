<template>
    <div>
        <v-container mt-12 pt-12 pl-12 mr-12>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <form @submit.prevent="onSignup">
                                     <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field
                                            name="name"
                                            label="Name"
                                            id="name"
                                            v-model="name"
                                            type="name"
                                            required
                                            >

                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
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
                                            <v-text-field
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            id="confirmPassword"
                                            v-model="confirmPassword"
                                            type="password"
                                            required
                                            :rules="[comparePass]"
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
                confirmPassword: '',
                name: ''
            }
        },
        computed: {
            comparePass() {
                return this.password !== this.confirmPassword ? 'Password not match' : ''
            },
            user () {
                return this.$store.getters.user
            }

        },
        watch: {
            user (value) {
                if (value !== null && value !== undefined) {
                    this.$router.push('/')
                }
            },
        },
        methods: {
            onSignup() {
                this.$store.dispatch('signUpUser', {
                    email: this.email, password: this.password, name: this.name})
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>