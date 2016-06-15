module.exports = {
    copySourceOnMinify: true,

    filesDestination: 'build/Release',

    minifiedJsSufix: '-min.js',

    cleanReleasePath: './build/Release/**',
    transpiledItems: [
        './js/controllers/utils.js',
        './js/controllers/**/*.d.ts',
        './js/maps/**',
    ],
    jsToCopy: [
        './src/**/*.js',
        './js/**/*.js',
    ],
    notBundledJsFiles: './js/**/*.js',
    filesToMove: [
        './src/**/*.css',
        './index.html',
        './learn.json',
    ],
    destinationMovedFiles: [
        './build/Release/src/**/*.css',
        './build/Release/index.html',
        './build/Release/learn.json',
    ],
    filesToTranspile: './js/**/*.ts',

    angularConfigFile: './js/angularConfig.json',
    angularConstantsTask: 'convertJsonToAngConstants',

    jsHintTask: 'jsHintTask',

    copyJsTask: 'copyJs',
    moveFilesTask: 'moveFiles',
    transpileTsTask: 'transpileTs',
    cleanReleaseFolderTask: 'cleanReleaseFolder',
    cleanTranspilingResultTask: 'cleanTranspilingResult',
    cleanMovedFilesTask: 'cleanMovedFiles',
    buildReleaseSequenceTask: 'buildReleaseSequence',
    transpileSequenceTask: 'transpileSequence',
    moveFilesSequenceTask: 'moveFilesSequence',
}