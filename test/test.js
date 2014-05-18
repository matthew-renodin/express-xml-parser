var fs = require('fs');
var assert = require('assert');
var xmlBodyParser = require('../');
describe('test parse stream', function() {
  var parser = xmlBodyParser();
  it('should parse xml to xmlJson', function(done) {
    var buf = fs.readFileSync(__dirname + '/test.xml');
    var rs = fs.createReadStream(__dirname + '/test.xml');
    rs.headers = {
      'content-length': buf.length,
      'content-type': 'application/xml'
    };
    parser(rs, null, function(err) {
      if (err) done(err);
      try {
        assert.deepEqual(rs.body, require('./test.json'), 'not equal');
      } catch (e) {
        done(e);
        return;
      }
      done();
    });
  });
});
