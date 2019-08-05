//Подключаем галп
const gulp = require('gulp');
//Объединение файлов
const concat = require('gulp-concat');
//Добапвление префиксов
const autoprefixer = require('gulp-autoprefixer');
//Оптисизация стилей
const cleanCSS = require('gulp-clean-css');
//Оптимизация скриптов
const uglify = require('gulp-uglify');
//Удаление файлов
const del = require('del');
//Синхронизация с браузером
const browserSync = require('browser-sync').create();
//Для препроцессоров стилей
const sourcemaps = require('gulp-sourcemaps');
//Sass препроцессор
const sass = require('gulp-sass');
// обработчик ошибок
var plumber = require("gulp-plumber");
// препроцессор html
var pug = require("gulp-pug");
//минифик изобр
var imagemin = require("gulp-imagemin");
//svg спрайт
var svgSprite = require('gulp-svg-sprite');
var cheerio = require('gulp-cheerio');
var svgmin = require('gulp-svgmin');
var replace = require('gulp-replace');
// //Less препроцессор
// const less = require('gulp-less');
// //Stylus препроцессор
// const stylus = require('gulp-stylus');

//Порядок подключения файлов со стилями
const styleFiles = [
   './src/sass/main.scss'
]
//Порядок подключения js файлов
const scriptFiles = [
   './src/js/lib.js',
   './src/js/main.js',
]
const jqery = [
   './src/js/jqery-min3.4.1.js',
   './src/js/jqcode.js'
]
//Таск для обработки стилей
gulp.task('styles', () => {
   //Шаблон для поиска файлов CSS
   //Всей файлы по шаблону './src/css/**/*.css'
   return gulp.src(styleFiles)
      .pipe(sourcemaps.init())
      // обработчик ошибок
      .pipe(plumber())
      //Указать stylus() , sass() или less()
      .pipe(sass())
      //Объединение файлов в один
      .pipe(concat('style.css'))
      //Добавить префиксы
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 2 versions'],
         cascade: false
      }))
      // генерацю не миниф стилей в папку source
      .pipe(gulp.dest('./src/css'))
      //Минификация CSS
      .pipe(cleanCSS({
         level: 2
      }))
      .pipe(sourcemaps.write('./'))
      //Выходная папка для стилей
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
});

//Таск для обработки скриптов
gulp.task('scripts', () => {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(scriptFiles)
      //Объединение файлов в один
      .pipe(concat('script.js'))
      //Минификация JS
      .pipe(uglify({
         toplevel: true
      }))
      //Выходная папка для скриптов
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
});
gulp.task('jqery', () => {
   //Шаблон для поиска файлов JS
   return gulp.src(jqery)
      //Объединение файлов в один
      //Минификация JS
      .pipe(uglify({
         toplevel: true
      }))
      //Выходная папка для скриптов
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
});
//Таск для очистки папки build
gulp.task('del', () => {
   return del(['build/*'],{dryRun: true})
});
//Такс для pug
gulp.task('pug', function buildHTML() {
   return gulp.src('./src/pug/pages/*.pug')
   .pipe(pug({
     pretty:true
   }))
   .pipe(gulp.dest('./build'))
 });
//Таск для imagemin
gulp.task('image-compress',function(){
   return gulp.src('./src/imgs/**')
   .pipe(imagemin({
      progressive: true
   }))
   .pipe(gulp.dest('./build/imgs'))
})
// таск для спрайтов svg
gulp.task('svg-sprite',function(){
   return gulp.src('./src/imgs/svg/*.svg')
   // минификатор svg
   .pipe(svgmin({
         js2svg: {
            pretty: true
         }
      }
   ))
   // удаляем атрибуты
   .pipe(cheerio({
         run: function ($){
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
         },
         parserOptions: {
            xmlMode:true
          }
   }))
   //правим символы после удаления
   .pipe(replace('&gt', '>'))
   // собираем спрайт
   .pipe(svgSprite({
         mode: {
            stack: {
               sprite: "../sprite.svg"  //sprite file name
            }
         },
   }
   ))
   .pipe(gulp.dest('./build/imgs'));
})

//Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./build"
      }
   });
   //Следить за картинками
   gulp.watch('./src/imgs/svg/*.svg', gulp.series('svg-sprite'))
   gulp.watch('./src/imgs/**', gulp.series('image-compress'))
   //Следить за файлами со стилями с нужным расширением
   gulp.watch('./src/sass/**/*.scss', gulp.series('styles'))
   //Следить за JS файлами
   gulp.watch('./src/js/**/*.js', gulp.series('scripts','jqery'))
   //При изменении HTML запустить синхронизацию
   gulp.watch('./src/pug/**/*.pug', gulp.series('pug'))
   gulp.watch("./build/*.html").on('change', browserSync.reload);
});

//Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task('start', gulp.series('del', gulp.parallel('styles', 'scripts','jqery','image-compress','svg-sprite','pug'), 'watch'));