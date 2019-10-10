// 路由守卫
import router from './router'
// import storage from "@/utils/storage";
router.beforeEach((to, from, next) => {

  console.log(to)
  console.log(from)
  //   console.log('111111')
  //   if (window.sessionStorage.getItem('TOKENID') === 123) {
  //   console.log('111111')
  next() // 正常跳转页面
  //   }
})
