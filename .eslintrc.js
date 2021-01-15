module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'jsx-quotes': 'off',
    'no-trailing-spaces': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
  },
};
