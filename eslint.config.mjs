import antfu from '@antfu/eslint-config';

export default antfu(
  {
    type: 'lib',
    typescript: {
      overrides: {
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              [
                'parent-type',
                'sibling-type',
                'index-type',
                'internal-type',
              ],
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              // 'side-effect',
              'object',
              'unknown',
            ],
            newlinesBetween: 'always',
            internalPattern: ['^@/.+'],
            order: 'asc',
            type: 'natural',
          },
        ],
        'ts/explicit-function-return-type': [
          'off',
        ],
        'ts/consistent-type-definitions': [
          'off',
        ],
      },
    },
    stylistic: {
      semi: true,
    },
    ignores: [
      'packages/kit/dist',
    ],
    formatters: {
      css: true,
    },
  },
  {
    rules: {
      'perfectionist/sort-exports': ['error', {
        partitionByComment: true,
        ignoreCase: false,
      }],
    },
  },
);
