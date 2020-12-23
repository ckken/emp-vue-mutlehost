const withVue2 = require('@efox/emp-vue2')
module.exports = withVue2(({config}) => {
  config.devServer.port(8011)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'p1',
        filename: 'emp.js',
        shared: ['vue/dist/vue.esm.js'],
        remotes: {
          'base': 'base@http://localhost:8009/emp.js',
          'p2': 'p2@http://localhost:8010/emp.js',
        },
      },
    }
    return args
  })

  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'P1',
      },
    }
    return args
  })
})
