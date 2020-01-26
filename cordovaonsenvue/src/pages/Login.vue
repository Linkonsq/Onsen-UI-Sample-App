<template>
  <v-ons-page>
    <img class="ipdc-logo login-logo" src="../assets/ipdc.jpg" alt="IPDC Logo">
    <div class="login">
      <v-ons-card class="card-radius">
        <v-ons-list>
          <v-ons-list-item class="input-items">
            <div class="left">
              <ons-icon icon="md-face" class="list-item__icon login-icon"></ons-icon>
            </div>
            <label>
              <v-ons-input id="username" placeholder="Username" type="text" v-model="username"></v-ons-input>
            </label>
          </v-ons-list-item>
          <v-ons-list-item class="input-items">
            <div class="left">
                <i class="icon ion-md-lock login-icon lock-icon-size"></i>
                </div>
                <div class="center">
                <v-ons-input id="password" placeholder="Password" type="password" v-model="password"></v-ons-input>
            </div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-card>
      <v-ons-button class="button loginbtn" @click="login">
        Sign In
      </v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
import Splitter from '../AppSplitter.vue'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.commit('navigator/push', Splitter);
    }
  }
}
</script>