<template>
    <div class="calculator">
        <Display :value="displayValue" /> <!--passa os valores do display-->
        <Button label="AC" triple @onClick="clearMemory" />  <!--definindo posição no grid /// @onClick criado por nós, que chama uma função-->
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="addDigit" />
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" operation @onClick="setOperation" />
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" operation @onClick="setOperation" />
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" operation @onClick="setOperation" />
        <Button label="0" double @onClick="addDigit" />
        <Button label="." @onClick="addDigit" />
        <Button label="=" operation @onClick="setOperation" />
    </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
    data: function() {
        return { //valores iniciais da aplicação
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0 //diz qual dos valores está sendo trabalhado
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() { //limpa a memória
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) { //recebe a operação na 1ª vez
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) { //add o valor
            if (n === "." && this.displayValue.includes(".")) { //se já tiver sido digitado um ponto, sai da função
                return
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false
            
            // Alternativa 1
            this.values[this.current] = displayValue
            
            // Alternativa 2
            // if (n !== ".") {
            //     const i = this.current
            //     const newValue = parseFloat(displayValue)
            //     this.values[i] = newValue
            // }
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
