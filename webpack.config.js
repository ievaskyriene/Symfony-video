const Encore = require('@symfony/webpack-encore');


if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/assets/')
    // public path used by the web server to access the output path
    .setPublicPath('/assets')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')


    //.addEntry('app', './assets/app.js')
    .addStyleEntry('css/dashboard', ['./assets/css/dashboard.css'])
    .addStyleEntry('css/login', ['./assets/css/login.css'])

    .enableSingleRuntimeChunk()

;

module.exports = Encore.getWebpackConfig();