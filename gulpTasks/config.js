module.exports = {
    copySourceOnMinify: true,

    filesDestination: 'build/Release',

    minifiedJsSufix: '-min.js',

    cleanReleasePath: './build/Release/**',

    copyJsTask: 'copyJs',
    moveFilesTask: 'moveFiles',
    transpileTsTask: 'transpileTs',
    cleanReleaseFolderTask: 'cleanReleaseFolder',
    buildReleaseSequenceTask: 'buildReleaseSequence',
}