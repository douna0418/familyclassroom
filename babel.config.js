module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [
      // 可根据需要添加其他插件
    ],
  };
};
