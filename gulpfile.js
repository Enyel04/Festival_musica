const { src, dest, watch, parallel } = require("gulp");
// CSS
const sass = require("gulp-sass")(require("sass")); //Llama todo lo de sass
const plumber = require("gulp-plumber"); //Llama todo lo de plumber
const autoprefixer= require ("autoprefixer");
const cssnano= require ("cssnano");
const postcss =require ("gulp-postcss");
const sourcemaps =require("gulp-sourcemaps");
// Imágenes
// const cache = require("gulp-cache"); // Comentado temporalmente
const webp = require("gulp-webp"); //
const imagemin = require("gulp-imagemin");
const avif = require("gulp-avif");


//js

const terser =require("gulp-terser-js")

function css(done) {
  src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer,cssnano()] ) )

    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));

  done();
}
//Aqui manda a llamar a imagenes para hacerlas menos pesadas
function imagenes(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{jpg,png}")
    // .pipe(cache(imagemin(opciones))) // Comentado temporalmente
    .pipe(imagemin(opciones))//Se busca donde esta ubicado
    .pipe(dest("build/img")); //Se manda a carpeta build
  done();
}

//Al igual que aqui pero en otro formato
function versionWebp(done) {
  const opciones = {
    calidad: 50,
  };
  src("src/img/**/*.{jpg,png}")//Se agrega la ubicacion para buscarlodespues el .
    .pipe(webp(opciones))  //para convertirlo
    .pipe(dest("build/img")); //y es enviado
  done(); //se marca finalizado
}

function versionAvif(done) {
  const opciones = {
    calidad: 50,
  };
  src("src/img/**/*.{jpg,png}")
    .pipe(avif(opciones))
    .pipe(dest("build/img"));
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);

  done();
}

function js(done) {
  src("src/js/**/*.js")
  .pipe(sourcemaps.init())
  .pipe(terser())
  .pipe(sourcemaps.write("."))
  .pipe(dest("build/js"));

  done();
}


exports.css = css; //Se llama a a las funciones
exports.js= js;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,css, versionWebp, versionAvif,js , dev);


