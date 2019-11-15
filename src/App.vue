<template>
    <div class="app">
        This is App
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
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
        }
    }
}
</script>

<style lang="scss">
.app {}
</style>
