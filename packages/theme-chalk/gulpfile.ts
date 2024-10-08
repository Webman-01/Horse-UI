import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";
import { dest, series, src } from "gulp";
function compile() {
    console.log(2222);
    
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest("./dist/css"));
}
function copyFullStyle() {
    console.log(1111);
    
  return src(path.resolve(__dirname, "./dist/**")).pipe(
    dest(path.resolve(__dirname, "../../dist/theme-chalk"))
  );
}
export default series(compile, copyFullStyle);
