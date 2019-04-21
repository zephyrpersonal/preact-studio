// const fse = require('fs-extra')
const webpack = require('webpack')

module.exports = function (env) {
  process.env.NODE_ENV = env
  const webpackConfig = require('../webpack/config')
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(err)
    }
    else {
      console.log('build success')
      console.log(stats.toString({
        chunks: true,  // Makes the build much quieter
        colors: true    // Shows colors in the console
      }))
    }
  })

  // 改小程序的endpoint
  // const wechatAppJsPath = process.cwd() + '/wechat/app.js'
  // let content = fse.readFileSync(wechatAppJsPath, 'utf8')
  // content = content.replace(/\d+\.\d+\.\d+\.\d+:\d+/, `${ip.address()}:${port}`)
  // fse.writeFile(wechatAppJsPath, content, 'utf8')
}
