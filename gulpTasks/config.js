module.exports = {
    copySourceOnMinify: true,

    filesDestination: 'build/Release',

    minifiedJsSufix: '-min.js',

    cleanReleasePath: './build/Release/**',

    copyJsTask: 'copyJs',
    moveFilesTask: 'moveFiles',
    cleanReleaseFolderTask: 'cleanReleaseFolder',
    buildReleaseSequenceTask: 'buildReleaseSequence',
}