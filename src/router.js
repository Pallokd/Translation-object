import Vue from 'vue'
import Router from 'vue-router'
import question from './components/question.vue'
import answer from './components/answer.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',

    components: {
      question,
      answer
    }
  }]
})