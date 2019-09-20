const path = require('path');

module.exports = (env, argv) => {
    return {
        mode: "development",
        devtool: "source-map",
        entry: './src/index.js'
    };
};