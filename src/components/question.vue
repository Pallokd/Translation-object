
<template>
  <fieldset>
    <legend>翻译操作区域</legend>
    <textarea style="width:100%;height:100px;" v-model="questext" @keydown.enter="fanyi"></textarea>
    <input type="button" value="翻译" @click.prevent="fanyi">
  </fieldset>
</template>
<script>
export default {
  data() {
    return {
      questext: "",
      china: /^[\u4e00-\u9fa5]+$/,
      english: /^[a-zA-Z]+$/
    };
  },
  methods: {
    fanyi() {
      if (this.china.exec(this.questext)) {
        this.guize("en");
      } else {
        this.guize("zh");
      }
    },
    guize(tes) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang=" +
            tes +
            "&text=" +
            this.questext
        )
        .then(res => {
          this.$emit("event", res.body.text[0]);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>