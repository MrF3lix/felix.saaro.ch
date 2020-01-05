const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
require('dotenv').config();

module.exports = withSass({
    webpack: config => {
        config.node = {
            fs: 'empty'
        };

        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));
        
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });


        return config;
    }
});
