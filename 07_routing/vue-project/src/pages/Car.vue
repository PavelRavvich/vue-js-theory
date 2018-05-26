<template>
    <div>
        <h2>Car id : {{ id }}</h2>
        <button class="btn btn-sm btn-info" @click="toCars">Back</button>
        <br>
        <router-link 
            tag="button"
            class="btn btn-info"
            :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000},hash: '#scroll'}"
            >Fill info
        
        </router-link>

        <hr>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                // id: this.$router.currentRote.params['id']
                id: this.$route.params['id']
            }
        },
        watch: {
            $route (toR, fromR) {
                this.id = toR.params['id']
            }
        },
        methods: {
            toCars() {
                this.$router.push('/cars');
            }
        },
        beforeRouteLeave: (to, from, next) => {
            if (window.confirm('Are you shure?')) {
                next()
            } else {
                next(false);
            }
        }
    }
</script>

<style scoped>

</style>
