<template>
    <div class="app">
        This is App {{GetTotalPrice}}
        <ul class="goods-wapper">
            <li v-for="item in goodsList" @click="AddToCar({ id: item.id, name: item.name, price: item.price })" :key="item.id" class="goods-item">{{item.name}}</li>
        </ul>
        <shop-car></shop-car>
        <router-view></router-view>
        <img :src="require('./header.png').default" alt="">
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
            }],
            obj1: {
                name: 'DahengZhang',
                age: 25
            },
            obj2: {
                sex: 'man',
                age: 26
            },
            arr1: [{
                name: 'huawei',
                price: 6899
            }, {
                name: 'apple',
                price: 7500
            }],
            arr2: [{
                name: 'xiaomi',
                price: 19999
            }, {
                name: 'samsung',
                price: 12000
            }]
        }
    },
    computed: {
        ...mapGetters(['GetTotalPrice'])
    },
    async mounted () {
        console.log({ ...this.obj1, ...this.obj2 })
        console.log(JSON.stringify([ ...this.arr1, ...this.arr2]))
        try {
            const result = await this.loading()
            console.log(result)
        } catch (err) {
            console.error(err)
        }
    },
    methods: {
        loading () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('请求失败')
                }, 1000)
            })
        },
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
