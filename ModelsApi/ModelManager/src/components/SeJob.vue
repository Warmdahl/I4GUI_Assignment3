<!--<template>
    <div>
        <md-card class="md-layout-item md-size-50 md-small-size-100">

            <md-card-header>
                <div class="md-title">Add Model to Job</div>
            </md-card-header>

            <md-card-content>



            </md-card-content>
        </md-card>
    </div>
</template>-->

<ul>
    <template>
        <li v-for="item in items" :key="item.message">
            {{ item.message }}
        </li>
    </template>
</ul>


<script>
    import router from "../router";

    export default {
        name: 'sejob',
        props: {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    };
</script>

<style>
</style>