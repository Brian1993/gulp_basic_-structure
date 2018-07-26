const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//uglify 會去掉js檔裡所有空格跟跟comment
const uglify = require('gulp-uglify'); 
const babel = require('gulp-babel');
const sass = require('gulp-sass');
//concat 會將所有js檔打包成一個 main.js
const concat = require('gulp-concat');
/*
    -- TOP LEVEL FUNCTION --   
    
    gulp.task - Define tasks
    gulp.src  - Point to files to use
    gulp.dest - Point to folder to output 
    gulp.watch- Watch files and folders for changes

*/
    
// START MESSAGE
gulp.task('message' ,()=> console.log('gulp is running ...') )

// COPY ALL THE HTML FILES
gulp.task('copyHtml', () =>
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
);

// OPTIMIZE IMAGES 

gulp.task('imageMin', () =>
    gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
);

// COMPILE SASS FILE  

gulp.task('sass' , ()=> 
    gulp.src('src/sass/*.scss')
        .pipe(sass.sync().on("error",sass.logError) ) 
        .pipe(gulp.dest('dist/css'))
)

// WATCH & SERVE
gulp.task('serve' , [])

//  Concat ALL THE JS FILES 
gulp.task('script' , ()=> 
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
    )

gulp.task('default' , [ 'message' ,'copyHtml' ,'imageMin','sass' ,'script' ]);

gulp.task('watch' ,()=>{
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/img/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['script']);
}
)