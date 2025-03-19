module.exports = {
    displayName: 'eslint-angular-rule-demo',
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
    },
    moduleFileExtensions: ['ts', 'js'],
};
