<template>
    <div class="about">
        This is About
        <router-link :to="{ name: 'home' }">back to home {{$route.query.name}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss">
.about {}
</style>
