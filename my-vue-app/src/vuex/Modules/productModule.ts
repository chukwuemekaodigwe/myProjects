import { state } from './products/state'
import { mutations } from './products/mutations';
 import { actions } from './products/action';
import { getters } from './products/getters';



export default {
    //namespaced: true,
    state,
    mutations,
    actions,
    getters,
}; 