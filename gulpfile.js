var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test',function(){
    gulp.src('./test/serverTesting.js')
    .pipe(mocha())
    .on('error',function(err){
        ths.emit('end');
    });
});


gulp.task('watch',function(){
    gulp.watch("./*.js",['test']);
});