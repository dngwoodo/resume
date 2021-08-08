import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: [
    './jest.setup.ts',
    'jest-plugin-context/setup',
    'given2/setup',
  ],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: { '@/(.+)$': '<rootDir>/$1' },
};

export default config;
