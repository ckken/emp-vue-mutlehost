const withVue2 = require('@efox/emp-vue2')
module.exports = withVue2(({config}) => {
  config.devServer.port(8009)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'base',
        filename: 'emp.js',
        exposes: {
          './Content': './src/components/Content',
        },
        // shared: ['vue/dist/vue.esm.js'],
      },
    }
    return args
  })

  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'BASE',
      },
    }
    return args
  })
})
