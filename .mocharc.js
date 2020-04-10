module.exports = {
  file: [
    'ts-node.setup.js',
    'mocha.setup.js',
  ],
  ignore: [
    'node_modules',
  ],
  require: 'ts-node/register',
  spec: "**/*.test.ts*",
};
