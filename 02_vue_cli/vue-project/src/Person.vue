<template>
    <div>
        <h3>First name: {{ firstName }}</h3>
        <p>Last name: {{ lastName }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: 'Pavel',
                lastName: 'Ravvich'
            }
        }
    }
</script>
