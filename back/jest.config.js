export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectOpenHandles: true,
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.ts?$': ['ts-jest', { isolatedModules: true }],
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};
