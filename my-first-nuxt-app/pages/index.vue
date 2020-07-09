<template>
  <section class="container">
    <div>
      <div>
        <div style="text-align: center;">
        <app-logo/>
        </div>
        <h1 class="title">
          Nuxt.jsのタグがつけられた投稿の一覧
        </h1>
      </div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h2>
            {{item.title}}
            <small>by <nuxt-link :to="`/users/${item.user.id}`">{{item.user.id}}</nuxt-link></small>
          </h2>
          <div>{{item.body.slice(0,130)}}....</div>
          <p><a :href="item.url">{{item.url}}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({app}){
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
    return {
      items
    }
  },
  // async mounted() {
  //   console.log(
  //     JSON.stringify(await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js'),true,' ')
  //   )
  // },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  padding: 16px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 4rem;
  text-align: center;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

h1 {
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}

li + li {
  margin: 16px 0;
}

p {
  margin: 8px 0;
}
</style>

