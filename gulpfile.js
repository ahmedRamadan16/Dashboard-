var gulp=require("gulp"),
    concat=require("gulp-concat"),
     minify = require("gulp-minify"),
     pug=require("gulp-pug"),
     sourcemaps=require('gulp-sourcemaps'),
     livereload=require("gulp-livereload"),
     notify=require("gulp-notify"),
    autoprefixer=require("gulp-autoprefixer");
    var sass = require('gulp-sass')(require('sass'));

//html task
gulp.task("html",()=>{
    return gulp.src("stage/html/pug/pages/*.pug")
            .pipe(pug({pretty:true}))
            .pipe(notify("Html Task End"))
            .pipe(gulp.dest("dist"))
            .pipe(livereload())
});

//css task 
gulp.task("css",()=>{
    return gulp.src(["stage/css/**/*.scss","stage/css/**/*.css"])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"compressed"}))
        .pipe(autoprefixer())
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(notify("css Task End"))
        .pipe(gulp.dest("dist/css"))
        .pipe(livereload())
});


//js task 
gulp.task("js",()=>{

    return gulp.src("stage/js/*.js")
            .pipe(concat("main.js"))
            .pipe(minify())
            .pipe(gulp.dest("dist/js"))
            .pipe(livereload())
});



//watch task 

gulp.task("watch",()=>{
    require("./server.js")
    livereload.listen();
    gulp.watch("stage/html/**/*.pug",gulp.series("html"));
    gulp.watch(["stage/css/**/*.scss","stage/css/**/*.css"],gulp.series("css"));
    gulp.watch("stage/js/*.js",gulp.series("js"));

});

//default task 

gulp.task("default",gulp.series("watch"));