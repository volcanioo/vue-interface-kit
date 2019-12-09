const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();


const sassDir = 'app/assets/style/scss';
const cssDir = 'app/assets/style/css';

let sassFiles = [ sassDir + "/*.scss", sassDir + "structure/*.scss", sassDir + "theme-parts/*.scss", sassDir + "components/*.scss", sassDir + "widgets/*.scss" ];

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('css', function () {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(cssDir))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(sassDir + '/*.scss', ['css']);
    gulp.watch(sassDir + '/structure/*.scss', ['css']);
    gulp.watch(sassDir + '/theme-parts/*.scss', ['css']);
    gulp.watch(sassDir + '/components/*.scss', ['css']);
    gulp.watch(sassDir + '/widgets/*.scss', ['css']);
    gulp.watch("app/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['css', 'watch', 'browser-sync']);