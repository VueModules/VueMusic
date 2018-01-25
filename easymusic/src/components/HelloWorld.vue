<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>say hello word</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          ok yes
        </a>
        <button id="gr" @click="getRequest">get request</button>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
         🐂
        </a>
        <button id="pr" v-on:click="postRequest">post request</button>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          🌹
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
        🐦
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
        🇨🇳
        </a>
      </li>
    </ul>
    <h2>🇺🇸</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
        🐔
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          🐶
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
        🐱
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          🐭
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
var client = axios.create({
      baseURL:'http://www.localhost:8080'
    })


export default {
  name: 'yes',
  data () {
    return {
      msg: 'come on 吃鸡'
    }
  },

  methods: {

    getRequest() {
      client.get('/top/playlist/highquality')
        .then(res => console.log(res))
    },

    postRequest() {
      console.log('post request')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  border-color: blue;
  border-width: medium;
}
a {
  color: #b94252;
}
div {
  border-color: blue;
  border-width: medium;
  background-color: blueviolet;
}
#pr, #gr {
  width: 50;
  height: 44;
  background-color: blue;
  text-decoration-color: aliceblue;
}
</style>
