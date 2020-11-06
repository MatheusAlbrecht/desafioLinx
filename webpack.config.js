var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var DESK_DIR = path.resolve(__dirname, './src/desktop');
var MOB_DIR = path.resolve(__dirname, './src/mobile');
var EMAIL_DIR = path.resolve(__dirname, './src/email');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  DESK_DIR: DESK_DIR,
  MOB_DIR: MOB_DIR,
  EMAIL_DIR: EMAIL_DIR
}

function buildConfig(env) {
  console.log(env);
  if(env.desktop === true){
    return require('./config/desktop.js')(configDirs);;
  }
  if (env.mobile === true) {
    return require('./config/mobile.js')(configDirs);;
  } 
  console.log("Wrong webpack build parameter. Possible choices: 'desktop' or 'mobile' '.")
}

module.exports = buildConfig;