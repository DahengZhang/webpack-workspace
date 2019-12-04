<template>
    <div class="shop-card">
        This is Shop Car
        <ul>
            <li v-for="item in GetShopCar" :key="item.id">{{item.id}}.{{item.name}} - {{item.total}} <button @click="LESS_GOODS(item.id)" :disabled="item.total <= 1">减少</button><button @click="MORE_GOODS(item.id)">添加</button> </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'ShopCar',
    computed: {
        ...mapGetters(['GetShopCar'])
    },
    created () {
        this.$eventBus.$on('test', (...arg) => {
            console.log(arg[0], arg[1])
        })
    },
    methods: {
        ...mapMutations(['LESS_GOODS', 'MORE_GOODS'])
    }
}
</script>

<style lang="scss">
.shop-car {}
</style>
