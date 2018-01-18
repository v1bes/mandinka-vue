import Vue from 'vue'
import App from './App.vue'
import Message from './Message'

new Vue({
  el: '#app',
  components: {
    'app-message': Message
  },
  render: h => h(App),
});
