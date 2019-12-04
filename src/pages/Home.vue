<template>
    <div class="home">
        This is Home <button @click="eventBus">EventBus</button>
        <router-link :to="{ name: 'about', query: { name: 'DahengZhang' } }">go to about</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        eventBus () {
            this.$eventBus.$emit('test', '测试', 'ceshi')
        }
    }
}
</script>

<style lang="scss">
.home {}
</style>
