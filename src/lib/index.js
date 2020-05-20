import tableCheckbox from './table-checkbox.vue'

tableCheckbox.install = function (Vue) {
    Vue.component('tableCheckbox', tableCheckbox)
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(tableCheckbox);
    }
}
export default tableCheckbox