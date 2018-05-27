export default {
    state: {
        counter: 0
    },
    getters: {
        computedCounter(state) {
            return state.counter + 10
        }
    },
    mutations: { // only sync actions
        changeCounter(state, payload) {
            state.counter += payload
        }
    },
    actions: { // async actions
        asyncChangeCounter(context, payload) {
            setTimeout(() => {
                context.commit('changeCounter', payload)
            }, 1000)
        }
    }
}