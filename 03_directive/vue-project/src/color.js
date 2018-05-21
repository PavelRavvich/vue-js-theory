export default {
    bind(el, bindings, vnode) {
        console.log('bind');
        let arg = bindings.arg;
        el.style[arg] = bindings.value;
        const fortModifier = bindings.modifiers['font'];
        if (fortModifier) {
            el.style.fontSize = '30px';
        }
    },

    inserted(el, bindings, vnode) {
        console.log('inserted')
    },

    update(el, bindings, vnode, oldVnode) {
        console.log('update')
    },

    componentUpdated(el, bindings, vnode, oldVnode) {
        console.log('componentUpdated')
    },

    unbind() {
        console.log('unbind')
    }
}