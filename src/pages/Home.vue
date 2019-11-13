<template>
    <div class="home">
        This is Home
        <router-link :to="{ name: 'about', query: { name: 'DahengZhang' } }">go to about</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
.home {}
</style>
