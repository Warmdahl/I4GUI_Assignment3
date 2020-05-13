<template>
    <div>
        <md-card class="md-layout-item md-size-50 md-small-size-100">

            <md-card-header>
                <div class="md-title">Add Model to Job</div>
            </md-card-header>

            <md-card-content>



            </md-card-content>
        </md-card>

        <p>Text:  {{ text }} </p>
    </div>
</template>


<script>
    //import router from "../router";

    export default {
        name: 'sejob',
        data: function () {
            return {
                text: "Vue is awesome"
            };
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    }
</script>

<style>
</style>