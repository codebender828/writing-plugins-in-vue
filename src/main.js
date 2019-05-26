import Vue from 'vue'
import App from './App'
import rulesPlugin from './plugins/rules-plugin'

Vue.use(rulesPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  data: { foo: 10 },
  rules: {
    foo: {
      validate: value => value > 1,
      message: 'foo must be greater than one'
    }
  },
  render: h => h(App)
})

// Should log validation message.
vm.foo = 0
// Uncomment next line to show validation
// vm.foo = 2
