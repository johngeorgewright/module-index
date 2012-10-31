var fs   = require('fs'),
    path = require('path');

module.exports = function(mod){
    var dirname = path.dirname(mod.filename),
        dir     = fs.readdirSync(dirname),
        i, file, moduleName;

  // Loop through all the files in this directory
  for(i=0; i<dir.length; i++){
    file = dir[i];
    // Unless the file is hidden or is this file
    if(file[0] !== '.' || file !== mod.filename){
      // Find the file's module name by removing it's extension
      moduleName = path.basename(file, path.extname(file));
      // Require the module and add it to the exports object
      mod.exports[moduleName] = require(dirname+'/'+moduleName);
    }
  }
};

