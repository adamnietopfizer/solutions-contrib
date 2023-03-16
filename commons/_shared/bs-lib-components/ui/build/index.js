process.env.NODE_ENV = 'production'

const parallel = require('os').cpus().length > 1
const runJob = parallel ? require('child_process').fork : require
const { join } = require('path')
const { createFolder } = require('./utils')
const { green, blue } = require('chalk')

console.log()

require('./script.app-ext.js').syncAppExt()
require('./script.clean.js')

console.log(` 📦 Building ${green('v' + require('../package.json').version)}...${parallel ? blue(' [multi-threaded]') : ''}\n`)

createFolder('dist')
createFolder('dist/types')

runJob(join(__dirname, './update-precompile-files.js'));
runJob(join(__dirname, './script.javascript.js'))
runJob(join(__dirname, './script.css.js'))

require("./build.types").generate()
