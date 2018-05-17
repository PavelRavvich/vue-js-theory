<template>
    <div>
        <h3>First name: {{ firstName }} \ Revers : {{ reversStr }}</h3>
        <p>Last name: {{ lastName }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change from parent</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>

<script>
    export default {
        /**
         * Три формата для описания ожидаемых значений в props.
         */
        props: ['firstName', 'lastName', 'changeFunc', 'counter'],
        // props: {
        //     firstName: String
        // },
        // props: {
        //     firstName: {
        //         type: String,
        //         required: true,
        //         default: 'Default value'
        //     }
        // },
        computed: {
            reversStr() {
                return this.firstName.split('').reverse().join('');
            }
        },
        methods:{
            changeName() {
                this.firstName = 'new value';
                this.$emit('eventName', this.firstName);
            },
            updateCounter() {
                this.$emit('counterUpdated', this.counter + 1);
            }
        }
    }
</script>
