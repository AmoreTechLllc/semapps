module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jsdoc/recommended-typescript-flavor',
    'eslint:recommended',
    'airbnb',
    'plugin:import/typescript',
    'prettier'
  ],
  globals: {
    JSX: true
  },
  ignorePatterns: ['**/dist/*', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['jsdoc', '@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    // Typescript strict rules should warn instead of error
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    'array-callback-return': 'warn',
    'arrow-body-style': 'off',
    camelcase: 'warn',
    'class-methods-use-this': 'warn',
    'consistent-return': 'warn',
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: 'warn',
    'guard-for-in': 'warn',
    'import/extensions': 'off',
    'import/newline-after-import': 'warn',
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-dynamic-require': 'off',
    'import/no-named-as-default': 'warn',
    'import/no-named-default': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/order': 'warn',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/tag-lines': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'warn',
    'no-case-declarations': 'warn',
    'no-else-return': 'off',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'warn',
    'no-restricted-globals': 'warn',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-shadow': 'warn',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'off',
    'one-var': 'warn',
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'warn',
    'prefer-template': 'warn',
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'warn',
    'spaced-comment': 'warn',
    'vars-on-top': 'warn'
  },
  // For javascript, rules need to be different (less strict mostly).
  overrides: [
    {
      files: '*.js',
      rules: {
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-mixed-enums': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-return-this-type': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn'
      }
    }
  ]
};
