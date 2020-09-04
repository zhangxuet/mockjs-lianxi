<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="decrease()">减</button>
    <h2>{{inVal}}</h2>
  </div>
</template>

<script>
import Bus from '@/utils/bus'
export default {
  data () {
    return {
      num: 1,
      deg: 1,
      inVal: 1
    }
  },
  // created () {
  // Bus.$on('val', (data) => {
  //   // this.num = data
  //   this.handleCount(data)
  //   // console.log(this.num)
  // })
  // },
  created () {
    Bus.$on('increamented', ({ num, deg }) => {
      this.inVal += num
      console.log(this.inVal)
    })
  },
  methods: {
    decrease (val) {
      Bus.$emit('decreased', {
        num: this.num,
        deg: this.deg
      })
    }
  }
}
</script>
