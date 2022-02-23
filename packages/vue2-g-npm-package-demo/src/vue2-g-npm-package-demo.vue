<template>
  <div class="vue2-g-npm-package-demo">
    <el-button>demo按钮</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
// import Element from 'element-ui'
import {
  Button
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Element)
Vue.use(Button)

export default {
  name: 'vue2-g-npm-package-demo',
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.vue2-g-npm-package-demo{
  background-color: orange;
}
</style>
