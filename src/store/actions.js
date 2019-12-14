/**
 * 内部调用 dispatch('actionName')
 */
export const AddToCar = ({ dispatch, commit, state }, { /* 传递来的参数 */ id, name, price }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('ADD_TO_CAR', {id, name, price})
            resolve()
        }, 2000)
    })
}
