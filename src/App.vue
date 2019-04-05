<template>
  <div id="app">
    <router-view name="question" @event="jieshou"></router-view>
    <router-view name="answer" :val2="val"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ""
    };
  },
  methods: {
    jieshou(val) {
      this.val = val;
      console.log(this.val);
    }
  }
};
</script>
<style>
</style>
