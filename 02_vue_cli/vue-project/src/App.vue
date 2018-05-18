<template>
    <div>
        <app-car></app-car>
        <hr>
        <h1>{{ firstName }}</h1>
        <app-person
            :firstName="firstName"
            :lastName="lastName"
            :changeFunc="changeNameToPavel"
            @eventName="firstName = $event"
            @counterUpdated="counter = $event"
        >
        </app-person>
        <app-counter></app-counter>


        <hr>
        <app-slot-example>
            <h2 slot="title">{{dataForSlot}}</h2>
            <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quibusdam?</p>
        </app-slot-example>
    </div>
</template>

<script>
    /**
     * Локальная регистрация компонента.
     */
    import Person from './Person.vue';
    import Counter from './Counter.vue';

    /**
     * Достаем глобально зарегестрированное хранилище событий.
     */
    import {eventEmitter} from './main';

    export default {
        data() {
            return {
                firstName: 'Pavel',
                lastName: 'Ravvich',
                dataForSlot: 'Dynamic data for slot'
            }
        },
        components: {
            appPerson: Person,
            appCounter: Counter
        },
        methods: {
            changeNameToPavel() {
                this.firstName = 'Pavel'
            },
            updateCounter() {
                // this.$emit('counterUpdated', this.counter + 1)
                eventEmitter.$emit('counterUpdated')
            }
        }
    }
</script>

<style scoped>

</style>
