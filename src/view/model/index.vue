<template>
  <div class="hello">
    <h1>{{ msg }}//////////////</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { model1Req } from "@/api/model1.js";
// import { model2Req } from "@/api/model2.js";
export default {
  name: "model",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    let param = {
      url: "/api/secure/inspection/asset/2102311PQH10H8000016",
      param: {
        id: "1"
      }
      // comm_req: {
      //   corpno: "000000"
      // }
    };
    model1Req(param).then(res => {
      // console.log("111111111" + JSON.stringify(res));
    });
    // model1Req({ url: "/api/secure/inspection/asset/2102311PQH10H8000016" });
    // model2Req({
    //   url: "/itom/api/secure/inspection/asset/2102311PQH10H8000016"
    // });
    // model2Req({
    //   url: "/itom/api/secure/inspection/asset/2102311PQH10H8000016"
    // });
    // this.reqM1Service(
    //   "/api/secure/inspection/asset/2102311PQH10H8000016",
    //   {},
    //   "get"
    // ).then(res => {
    //   console.log(res);
    // });

    //->调用第2个接口的请求服务
    this.reqM2Service(
      "/itom/api/secure/inspection/asset/2102311PQH10H8000016",
      {},
      "get"
    ).then(res => {
      // console.log(res);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
