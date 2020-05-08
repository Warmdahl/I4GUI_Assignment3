<template>
   <ul v-if="model && model.length">
       <li v-for="mod of model" : key="mod.id">
           <h2>{{mod.id}}</h2>
       </li>
   </ul>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                model: []
            }
        },

        mounted() {
            axios.get('http://jsonplaceholder.typicode.com/todos')
                .then(response => { this.model = response })
        }
    }
</script>

<style scoped>
</style>