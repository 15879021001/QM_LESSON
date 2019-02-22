<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时常</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{time}} 小时</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // time: '3'
    }
  },
  computed: {
    time() {
      return this.$store.state.totalTime
    }
  }
}
</script>

<style>

</style>
