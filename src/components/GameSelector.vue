<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half" v-for="{ src, alt, name, button } in games" :key="name">
                    <figure class="image is-4by5">
                        <img :src="src" :alt="alt">
                    </figure>
                    <Button :text="button.text" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Button } from './'
export default {
    name: "GameSelector",

    components: {
        Button,
    },

    data() {
        return {
            games: [
                {
                    name: 'FLL',
                    src: require('../assets/fll.png'),
                    alt: 'Robô de FLL',
                    button: {
                        text: 'Jogar FLL',
                    }
                },
                {
                    name: 'FRC',
                    src: require('../assets/frc.png'),
                    alt: 'Robô de FRC',
                    button: {
                        text: 'Jogar FRC',
                    }
                },
            ]
        }
    },
}
</script>

<style>
.container {
    max-width: 700px !important;
    margin-top: 10vh;
}
</style>