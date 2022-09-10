module.exports = {
    transform: {
        '^.+\.tsx?$': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    testRegex: '/src/.*\\.spec?\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'tsx']
};
