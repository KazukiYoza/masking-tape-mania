// import Vue from 'vue'
import AOS from 'aos'

// Vue.use(AOS.init({
//     once: false,
//     disable: 'phone',
//     duration: 1000,
//     // easing: 'ease-in',
//   })
// )

export default ({app},inject) => {
    app.AOS = new AOS.init({
        once: true,
        disable: 'phone',
        duration: 1000,
        // easing: 'ease-in',
      })
    }