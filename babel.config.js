module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          theme: './src/common/theme',
          colors: './src/common/colors',
          'common-components': './src/common/components',
          assets: './src/assets',
        },
        extensions: ['.js', '.jsx'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
