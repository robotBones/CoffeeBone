# required by ./gulpfile.js

# libraries
gulp    = require 'gulp'
sass    = require 'gulp-sass'
prefix  = require 'gulp-autoprefixer'
cssmin  = require 'gulp-cssmin'
rename  = require 'gulp-rename'

STYLES_DEST = 'public/styles'

# Create your CSS from Sass, Autoprefix it to target 99%
#  of web browsers, minifies it.
gulp.task 'css', ->
  gulp.src 'client/styles/index.sass'
    .pipe sass
      errLogToConsole: true
      sourceComments: 'normal' # this is needed to prevent a few types of errors
    .pipe prefix '> 1%'
    .pipe gulp.dest STYLES_DEST
    .pipe cssmin keepSpecialComments: 0
    .pipe rename extname: '.min.js'
    .pipe gulp.dest STYLES_DEST

gulp.task 'default', ['css']
