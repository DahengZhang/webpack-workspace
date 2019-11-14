<template>
    <div class="app">
        This is App {{GetTotalPrice}}
        <ul class="goods-wapper">
            <li v-for="item in goodsList" @click="AddToCar({ id: item.id, name: item.name, price: item.price })" :key="item.id" class="goods-item">{{item.name}}</li>
        </ul>
        <shop-car></shop-car>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ShopCar from 'src/components/ShopCar'

export default {
    name: 'App',
    data () {
        return {
            goodsList: [{
                id: 0,
                name: 'huawei',
                price: 6899
            }, {
                id: 1,
                name: 'apple',
                price: 7500
            }]
        }
    },
    computed: {
        ...mapGetters(['GetTotalPrice'])
    },
    methods: {
        ...mapActions(['AddToCar'])
    },
    components: {
        ShopCar
    }
}
</script>

<style lang="scss">
.app {
    .goods-wapper {
        .goods-item {
            user-select: none;
            cursor: pointer;
            &:hover {
                background-color: #c1c1c1;
                color: #ffffff;
            }
            &:active {
                color: #999999;
                background-color: #f1f1f1;
            }
        }
    }
}
</style>
