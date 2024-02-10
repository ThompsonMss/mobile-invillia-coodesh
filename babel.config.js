module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "alias": {
          "@Domain": "./src/domain",
          "@Store": "./src/store",
          "@Routes": "./src/routes",
          "@Shared": "./src/shared",
          "@Config": "./src/config"
        },
        "extensions": [
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
