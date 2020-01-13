<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <w-input></w-input> -->
    <!-- <hello-name></hello-name> -->
    <wa-button></wa-button>
    <wa-input></wa-input>
    <!-- <wabutton></wabutton> -->
    <el-button>elButton</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  mounted() {
    debugger
    console.log('home:::', this)
  }
}
</script>
