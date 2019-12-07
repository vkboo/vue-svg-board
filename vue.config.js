const path = require('path');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, dir);
}

function getDateTime () {
    var d, s;
    d = new Date();
    s = d.getFullYear(); // 取年份
    s += '/' + ('0' + (d.getMonth() + 1)).substr(-2);// 取月份
    s += '/' + ('0' + d.getDate()).substr(-2); // 取日期
    s += ' ' + ('0' + d.getHours()).substr(-2); // 取小时
    s += ':' + ('0' + d.getMinutes()).substr(-2); // 取分
    // s += ':' + ('0' + d.getSeconds()).substr(-2); // 取秒
    return s;
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        extract: false,
    },
    pages: {
        index: {
            // entry for the page
            entry: 'examples/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'sketchBoard',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js',
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', resolve('examples/assets'))
            .set('@plugin', resolve('sketch_board'))
            .set('@', resolve('examples'));
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    },
    configureWebpack: config => {
        let pluginBanner = [
            new webpack.BannerPlugin(`Build Time = ${getDateTime()}`),
        ];
        config.output.libraryExport = 'default';
        config.plugins = [...config.plugins, ...pluginBanner];
    },
};
