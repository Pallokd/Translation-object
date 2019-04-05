<template>
  <fieldset>
    <legend>翻译显示结果区域</legend>
    <div style="height:60px;background: gray;color:#fff;">{{val2}}</div>
  </fieldset>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["val2"]
};
//https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang=zh&text=china
</script>
<style lang="scss" scoped>
</style>
