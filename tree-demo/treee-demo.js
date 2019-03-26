// demo data
var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'yeehom' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'yeehom' }
          ]
        },
        { name: 'hello' },
        { name: 'yeehom' },
        {
          name: 'child folder',
          children: [
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'yeehom' }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// define the tree-item component
Vue.component('tree-item', {
  template: '#item-template',
  props: {
    item: Object
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function() {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
})

var demo = new Vue({
  el: '#demo',
  data: {
    treeData: treeData
  },
  methods: {
    makeFolder: function(item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function(item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  }
})