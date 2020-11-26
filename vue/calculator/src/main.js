import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) //pega um componente do vue e renderiza na pg 
}).$mount("#app") //substitui o el que referencia o id