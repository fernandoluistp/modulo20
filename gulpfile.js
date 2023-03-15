const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
async function tarefasImagem() {
        const { default: imagemin } = await import('gulp-imagemin');
      
        return gulp
        .src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
    }
      
function tarefasJS(){
        return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.js',
            './vendor/jquery-ui/js/jquery-ui.js',
            './src/js/custom.js'
        ])
                .pipe(concat('scripts.js'))
                .pipe(uglify())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('./dist/js'))
}

function tarefasCSS(cb){
        return gulp.src('./vendor/**/*.css')
                .pipe(concat('style.css'))
                .pipe(cssmin())
                .pipe(rename({ suffix : '.min'}))
                .pipe(gulp.dest('./dist'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem