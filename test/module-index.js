var expect      = require('expect.js'),
    path        = require('path'),
    moduleIndex = require('../index.js');

describe('module-index()', function(){

  beforeEach(function(){
    this.mod = {
      filename : path.join(__dirname, 'test-module/index.js'),
      exports  : {}
    };
    moduleIndex(this.mod);
  });

  it('should include all of it\'s sibling modules', function(){
    expect(this.mod.exports).to.be.an(Object);
    expect(this.mod.exports.mung).not.to.be(undefined);
    expect(this.mod.exports.face).not.to.be(undefined);
    expect(this.mod.exports.mungface).not.to.be(undefined);
  });

});

