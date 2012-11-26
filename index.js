var fs   = require('fs'),
    path = require('path'),
    Mod  = require('module');

function loadFromModule(mod){
  var dirname = path.dirname(mod.filename),
      dir     = fs.readdirSync(dirname),
      i, file, moduleName;

  // Loop through all the files in this directory
  for(i=0; i<dir.length; i++){
    file = dir[i];
    // Unless the file is hidden or is this file
    if(file[0] !== '.' && file !== mod.filename){
      // Find the file's module name by removing it's extension
      moduleName = path.basename(file, path.extname(file));
      // Require the module and add it to the exports object
      mod.exports[moduleName] = require(path.join(dirname, moduleName));
    }
  }
}

function loadFromName(mod){
  var parent   = module.parent,
      dirname  = path.dirname(parent.filename),
      filename = path.join(dirname, mod, 'index') + '.js';

  mod          = new Mod(filename);
  mod.filename = mod.id;
  mod.parent   = parent;

  loadFromModule(mod);

  mod.loaded = true;

  return mod;
}

module.exports = function(mod){
  if(mod.filename){
    loadFromModule(mod);
  }else{
    mod = loadFromName(mod);
  }

  return mod.exports;
};

