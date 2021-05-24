<template>
 <section class="section">
        <div class="container" id="board">
            <div class="columns">
                <div class="column">
                    <figure>
                        <img :src="src" alt="Tabuleiro">
                    </figure>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column" v-for="{ number, button } in options" :key="number">
                    <Card>
                        <Button :text="button.text" :event="button.event" />
                        <div class="p-2 mb-5" v-if="button.solution.visible"> 
                            <figure>
                                <img :src="getSrc(number)" alt="Tabuleiro">
                            </figure>
                            <Button 
                                :fullWidth="false" 
                                class="is-pulled-right" 
                                text="Escolher" 
                                :event="() => { setOption(button.solution.board) }" 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Button } from './'
import Card from './Card'
export default {
    name: 'Board',

    props: {
        name: String,
        options: Array,
    },

    components: {
        Button,
        Card,
    },

    watch: {
        name(newName) {
            this.src = require(`../assets/${newName}.jpg`)
        },
    },

    data() {
        return {
            src: require(`../assets/${this.name}.jpg`),
        }
    },

    methods: {
        getSrc(number) {
            return require(`../assets/${this.name}-option-${number}.jpeg`)
        },

        setOption(board) {
            this.$emit('board', board)
        },
    }
}
</script>

<style>
.container#board {
    max-width: 700px !important;
}
</style>