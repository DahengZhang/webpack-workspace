/**
 * 内部调用 commit('mutationsName')
 */
export default {
    ADD_TO_CAR (state, target) {
        const goodsIndex = state.shopList.findIndex(item => item.id === target.id)
        if (goodsIndex >= 0) {
            state.shopList[goodsIndex].total++
        } else {
            state.shopList.push({ ...target, total: 1 })
        }
        let totalPice = 0
        state.shopList.forEach(item => {
            totalPice += item.price * item.total
        })
        state.totalPice = totalPice
    },
    MORE_GOODS (state, target) {
        const goodsIndex = state.shopList.findIndex(item => item.id === target)
        if (goodsIndex < 0) return
        state.shopList[goodsIndex].total++
        state.totalPice += state.shopList.find(item => item.id === target).price
    },
    LESS_GOODS (state, target) {
        const goodsIndex = state.shopList.findIndex(item => item.id === target)
        if (goodsIndex < 0) return
        state.totalPice -= state.shopList.find(item => item.id === target).price
        if (--state.shopList[goodsIndex].total <= 0) {
            state.shopList.splice(goodsIndex, 1)
        }
    }
}
