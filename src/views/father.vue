<template>
  <div>
    <About></About>
    <Home></Home>
    <div>{{inVal}}</div>
    <div>{{degVal}}</div>
    <div>{{backVal}}</div>
    <!-- <button>点击father</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import About from './About'
import Home from './Home'
import Bus from '@/utils/bus'
export default {
  components: { About, Home },
  data () {
    return {
      degVal: 0,
      inVal: 0,
      backVal: 0
    }
  },
  mounted () {
    Bus.$on('increamented', ({ num, deg }) => {
      this.inVal += num
      this.$nextTick(() => {
        this.degVal -= deg
        this.backVal += num
      })
    })
    Bus.$on('decreased', ({ num, deg }) => {
      this.inVal -= num
      this.$nextTick(() => {
        this.degVal -= deg
        this.backVal -= num
      })
    })
  }
}
</script>
