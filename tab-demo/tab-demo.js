Vue.component('tab-home', {
    template: "<div>Home component</div>"
})
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
})
Vue.component('tab-achive', {
    template: '<div>Achive component</div>'
})

new Vue({
    el: '#tab-demo',
    data: {
        tabs: ['Home', 'Posts', 'Achive'],
        currentTab: 'Home'
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
})