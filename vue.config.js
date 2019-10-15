//这个配置会跟公共的配置做合并
module.exports = {
  // 配置别名
  configureWebpack:{
    resolve:{
      //路径相关的问题
      alias:{
        "assets":"@/assets",
        "components":"@/components",
        "common":"@/components/common",
        "network":"@/network",
        "views":"@/views"
      }
    }
  }
}