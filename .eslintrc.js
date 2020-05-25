module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'react-native/no-unused-styles': 2,
    'arrow-parens': 0,
    'max-len': [2, {code: 120}],
    'react/jsx-one-expression-per-line': 0,
    'operator-linebreak': 0,
  },
};
