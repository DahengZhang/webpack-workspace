<template>
    <div class="app">
        This is App
        <img :src="require('./header.png').default" alt="">
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
.app {
    color: #cccccc;
}
</style>
