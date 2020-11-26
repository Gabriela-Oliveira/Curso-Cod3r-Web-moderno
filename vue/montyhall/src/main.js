import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) // reideriza o componente na tela ///// esta linha faz a mesma coisa das duas linhas em baixo
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app") //mesma coisa que usar o el /// diz que vc quer reiderizar o componente app