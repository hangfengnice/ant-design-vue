const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "vue",
    "md"
  ],
  modulePathIgnorePatterns: [
    '/_site/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'node',
  ],
  transform: {
    ".*\\.(vue|md)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "vue-antd-ui": "<rootDir>/components/index.js",
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  collectCoverage: process.env.COVERAGE === 'true',
  collectCoverageFrom: [
    "components/**/*.{js,jsx,vue}",
    '!components/*/style/index.{js,jsx}',
    '!components/style/index.{js,jsx}',
    '!components/*/locale/index.{js,jsx}',
    '!components/*/__tests__/**/type.{js,jsx}',
    "!**/node_modules/**"
  ],
  transformIgnorePatterns,
};