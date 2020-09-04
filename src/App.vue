<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link>
      <!-- <div v-for="item in tableData" :key="item.key">
        <div>{{item.mockTitle}}:
          {{item.mockContent}}---{{item.mockAction}}
        </div>
      </div> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
// import './mock/mock'
// import './mockServer'
import axios from 'axios'
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    // this.getTableData()
  },
  methods: {
    getTableData () {
      axios.get('http://localhost:4000/mode2/DataOne').then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.tableData = res.data.dataSource
          // console.log(this.tableData)
        }
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
