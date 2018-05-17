<template>
    <div>
        <app-car></app-car>
        <app-person></app-person>
    </div>
</template>

<script>
    /**
     * Локальная регистрация компонента.
     */
    import Person from './Person.vue';

    export default {
        components: {
            appPerson: Person
        }
    }
</script>

<style>

</style>
