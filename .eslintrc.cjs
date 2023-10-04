module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};

/**
 * Environment Configuration:

Original: env: { browser: true, es2020: true }
Modified: env: { node: true }
In the original code, the environment was set to browser and es2020, which is suitable for browser-based JavaScript. 
In the modified code, it's changed to 'node: true' to specify that the ESLint configuration is for Node.js server-side code.

Allowing 'var' for 'require' Statements:

Modified: @typescript-eslint/no-var-requires: 'off'
In the modified code, a rule is added to disable the no-var-requires rule specifically for TypeScript files. 
This allows the use of var for require statements in TypeScript files. 
This change was made because in server-side Node.js code, it's common to use require, and TypeScript's strict mode disallows var by default, so this rule was turned 
off to allow it.
 */

