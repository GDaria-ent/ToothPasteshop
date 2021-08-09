
let PATHS = {

    templates: ['src/html/pages/**/*.+(html|nunjucks)','src/html/templates/**/*.+(html|nunjucks)'],
    commonTemplates: 'src/html/**/*.+(html|nunjucks)',
    templatesAlias: ['src/html/templates'],

    html: [
        './**/*.html'
    ],
    js: [
        'src/js/**/*.js'
    ],
    css: [
        'src/css/**/*.css'
    ],
    sass: [
        'src/sass/**/*.sass',
        'src/sass/**/*.scss',
    ],
    copy: {
        source: [
            'static/**/*'
        ],
        dest: 'dist/'
    },

    data: './../../src/data/data.json',

    commonDist: 'dist/',

    cssDist: 'dist/css/',

    jsDist: 'dist/js/',

    htmlDist: 'dist/'
};

module.exports = PATHS;