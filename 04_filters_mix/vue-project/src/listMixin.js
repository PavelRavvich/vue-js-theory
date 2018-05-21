export default {
    data() {
        return {
            names: ['Vlad', 'Max', 'Elena'],
            searchName: ''
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name =>
                name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
        }
    }
}