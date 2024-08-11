export default {
    extensions: {
        ts: 'module',
    },
    files: ['dist/tests/*.js'],
    nodeArguments: [
        '--loader=ts-node/esm',
        '--experimental-specifier-resolution=node',
    ],
    workerThreads: false,
};
