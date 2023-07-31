module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
  
          "@config/*": "./src/config/*",
          "@shared/*": "./src/shared/*",
          "@utils/*": "./src/utils/*",
          "@database/*": "./src/database/*",
          "@erros/*": "./src/erros/*",
          "@middlewares/*": "./src/middlewares/*",
          "@models/*": "./src/models/*",
          "@repositories/*": "./src/repositories/*",
          "@routes/*": "./src/routes/*",
          "@services/*": "./src/services/*"
  
        }
      }],
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      ['@babel/plugin-proposal-class-properties', { 'loose': true }]
    ],
  }
  