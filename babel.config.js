module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.26.0',
        useBuiltIns: 'entry',
      },
    ],
  ],
};
