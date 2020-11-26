<template>
    <button class="button"
        @click="$emit('onClick', label)" 
        :class="{ double, triple, operation }"> <!--se for verdadeiro aplica a classe-->
        {{ label }}
    </button>
</template>

<script>
export default {
    props: { //parametros do botão
        label: {},
        operation: { type: Boolean }, //operações
        double: { type: Boolean }, //1ª coluna
        triple: { type: Boolean }
    }
}
</script>

<style>
:root { /*definindoo variáveis*/
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2; /*definindo quantidade de colunas no grid*/
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>
