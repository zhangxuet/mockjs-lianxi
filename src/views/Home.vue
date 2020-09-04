<template>
  <div>
    <button @click="increment()">加</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Bus from '@/utils/bus'
export default {
  name: 'Home',
  data () {
    return {
      num: 1,
      deg: 1
    }
  },
  destroyed () {
    Bus.$emit('increamented', {
      num: this.num,
      deg: this.deg
    })
  },
  methods: {
    increment () {
      Bus.$emit('increamented', {
        num: this.num,
        deg: this.deg
      })
      this.$router.push('/about')
    }
  }
}
</script>
