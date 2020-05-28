module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'max-len': [2, { code: 120 }],
    'react/jsx-one-expression-per-line': 0,
    'operator-linebreak': 0,
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
};
