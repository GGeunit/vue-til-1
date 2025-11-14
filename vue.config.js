module.exports = {
  devServer: {
    overlay: false,
  },
  // 빌드(프로덕션)에서도 소스맵 보고 싶으면
  productionSourceMap: true,

  // webpack devtool 설정
  configureWebpack: {
    devtool: 'source-map', // 또는 'eval-source-map'
  },
};
