<script lang="ts">
    export let icon:string;
    export let href:string = "#";
</script>

<a class="container" {href}>
    <img src="/icons/{icon}.svg" alt="">
</a>

<style>
    .container {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 0px 10px 0px 0px;
        color: white;
    }
    img {
        color: white;
    }
</style>