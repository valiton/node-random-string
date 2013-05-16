'use strict';

var randomString = require('../lib/random-string.js');

exports['randomString'] = {

  'default_length': function(test) {
    test.expect(1);
    test.equal(randomString().length, 8, 'the random string should be excactly 8 characters long');
    test.done();
  },

  'change_length': function(test) {
    test.expect(1);
    test.equal(randomString({length: 5}).length, 5, 'the random string should be excactly 5 characters long now');
    test.done();
  },

  'include_only_numbers': function(test) {
    test.expect(1);
    var result = randomString({
      numeric: true,
      letters: false,
      special: false
    });
    test.ok(/^\d+$/.test(result), 'the random string should include only numbers');
    test.done();
  },

  'include_only_letters': function(test) {
    test.expect(1);
    var result = randomString({
      numeric: false,
      letters: true,
      special: false
    });
    test.ok(/^[a-zA-Z]+$/.test(result), 'the random string should include only letters');
    test.done();
  },

  'include_only_specials': function(test) {
    test.expect(1);
    var result = randomString({
      numeric: false,
      letters: false,
      special: true
    });
    test.ok(/^[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]+$/.test(result), 'the random string should include only specials');
    test.done();
  }

};
