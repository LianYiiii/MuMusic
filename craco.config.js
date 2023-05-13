const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ],
    webpack: {
        alias: {
            '@': resolve('src'),        // 定义字符 @ 指代的路径
            components: resolve('src/components')       // 写components代表src下的components文件夹
        }
    }
}