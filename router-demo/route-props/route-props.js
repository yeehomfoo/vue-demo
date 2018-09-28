function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

const Hello = {
	template: `
    <div>
      <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
    </div>
  `,
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Hello }, // No props, no nothing
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: Hello, props: { attrs: 'attrs' }}
  ]
})

new Vue({
  router,
}).$mount('#app')