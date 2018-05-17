<template>
    <div>
        <app-car></app-car>
        <hr>
        <h1>{{ firstName }}</h1>
        <app-person
            :firstName="firstName"
            :lastName="lastName"
            :counter="counter"
            :changeFunc="changeNameToPavel"
            @eventName="firstName = $event"
            @counterUpdated="counter = $event"
        >
        </app-person>
        <app-counter :counter="counter"></app-counter>

    </div>
</template>

<script>
    /**
     * Локальная регистрация компонента.
     */
    import Person from './Person.vue';
    import Counter from './Counter.vue';

    export default {
        data() {
            return {
                firstName: 'Pavel',
                lastName: 'Ravvich',
                counter: 0
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
                this.$emit('counterUpdated', this.counter + 1)
            }
        }
    }
</script>

<style>

</style>
