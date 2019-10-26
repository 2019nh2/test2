import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router/index.js";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5uaNyn443m1mAMpMalm6pIX3cG60hbt0",
  authDomain: "sample-c2c8b.firebaseapp.com",
  databaseURL: "https://sample-c2c8b.firebaseio.com",
  projectId: "sample-c2c8b",
  storageBucket: "sample-c2c8b.appspot.com",
  messagingSenderId: "696231681124",
  appId: "1:696231681124:web:8daf9f6309c5d789ae5371"
};
firebase.initializeApp(config);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
