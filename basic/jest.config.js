module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  maxWorkers: '50%',
  testTimeout: 10_0000,

  /* bazel copies files using symlinks */
  /* jest doesn't like symlinks by default */
  /* enable symlinks and disable watchman to use symlinks */
  haste: {
    enableSymlinks: true,
  },
  bail: 1,
  verbose: true,
  watchman: false,
};
