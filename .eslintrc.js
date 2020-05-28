module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.json'] },
    ],
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'max-len': [2, { code: 120 }],
    'react/jsx-one-expression-per-line': 0,
    'operator-linebreak': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
      },
    ],
  },
  env: {
    jest: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _navigations: './src/navigations',
          _scenes: './src/scenes',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
