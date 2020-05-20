<template>
  <div id="app">
    <tableCheckbox :vshareConfig='vshareConfig'></tableCheckbox>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      vshareConfig:'表格里的数据'
    }
  }
}
</script>

<style>

</style>
