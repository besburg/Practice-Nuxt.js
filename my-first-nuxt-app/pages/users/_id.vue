<template>
  <section class="container">
    <div>
      <h1>{{user.id}}</h1>
      <img :src="user.profile_image_url" width="120" alt="">
      <p>{{user.description || 'No description'}}</p>
      <p>
        <nuxt-link to="/"><small><b>トップへ戻る</b></small></nuxt-link>
      </p>
      <h1>{{user.id}}さんの投稿一覧</h1>
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
export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({route, app, error}){
    try{
      const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
      const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
      return {user,items}
    }catch(err){
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
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