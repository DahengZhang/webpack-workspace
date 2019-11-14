import * as types from './mutation-types'

/**
 * 内部调用 dispatch('actionName')
 */
export const AddToCar = ({ dispatch, commit, state }, { /* 传递来的参数 */ id, name, price }) => {
    commit(types.ADD_TO_CAR, {id, name, price})
}
