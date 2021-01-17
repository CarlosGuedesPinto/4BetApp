module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/standard',
        '@vue/typescript'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'indent': 'off',
        'quote-props': ['error', 'consistent'],
        'dot-notation': 'off',
        'prefer-const': 'error',
        'space-in-brackets': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off', // TODO: remove this on IS-6074
        'vue/no-template-shadow': 'off', // TODO: remove this on IS-6074
        'vue/require-default-prop': 'off',
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1,
            'ignores': []
        }],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/indent': ['error', 4, {
            'SwitchCase': 1,
            'ignoreComments': true
        }],
        '@typescript-eslint/interface-name-prefix': 'off', // TODO: change to ['error', 'always'] on IS-6074,
        '@typescript-eslint/no-extraneous-class': 'off', // TODO: change to ['warn'] on IS-6074
        '@typescript-eslint/no-parameter-properties': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],
        '@typescript-eslint/no-unused-vars': 'error'

    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                '@typescript-eslint/indent': 'off'
            }
        },
        {
            files: ['*.spec.ts'],
            rules: {
                'no-unused-expressions': 'off'
            }
        }
    ]
}
