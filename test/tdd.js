var assert = require('assert');
var request = require("request");
var url = "http://localhost:4000/verifyPalindrome";
var controller = require('../controllers/palindrome');

suite('PalindromeTDD', function() {

  suite('verifyPalindrome', function() {
    test('should return 200 from Restful when the sentence is a palindrome', function() {
      request.get(url+'/a man a plan a canal panama', function(error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    test('should return 400 from Restful when the sentence is not a palindrome', function() {
      request.get(url+'/is not a palindrome', function(error, response, body) {
        assert.equal(response.statusCode, 400);
        done();
      });
    });

    test('should return 200 from Restful when the word is a palindrome', function() {
      request.get(url+'/aba', function(error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    test('should return 400 from Restful when the word is not a palindrome', function() {
      request.get(url+'/palindrome', function(error, response, body) {
        assert.equal(response.statusCode, 400);
        done();
      });
    });

    test('should return true from controller when the sentence is a palindrome', function() {
      assert.equal(controller.isPalindrome("a man a plan a canal panama"), true);
    });

    test('should return false from controller when the sentence is not a palindrome', function() {
      assert.equal(controller.isPalindrome("is not a palindrome"), false);
    });

    test('should return true from controller when the word is a palindrome', function() {
      assert.equal(controller.isPalindrome("aba"), true);
    });

    test('should return false from controller when the word is not a palindrome', function() {
      assert.equal(controller.isPalindrome("palindrome"), false);
    });

  });
});
