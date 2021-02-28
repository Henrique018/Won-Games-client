module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules', '/next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/stories.tsx',
		'!src/pages/**/*.tsx',
		'!src/styles/**/*.ts(x)?',
		'!src/utils/apollo.ts',
		'!src/graphql/queries/*.ts',
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};
