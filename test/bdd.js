var assert = require('assert');
var request = require("request");
var url = "http://localhost:4000/verifyPalindrome";
var controller = require('../controllers/palindrome');

describe('PalindromeBDD', function() {
    describe("verifyPalindrome", function() {
      context('when the sentence is a palindrome', function() {
        it("returns status code 200 from URL", function(done) {
          request.get(url+'/a man a plan a canal panama', function(error, response, body) {
            assert.equal(response.statusCode, 200);
            done();
          });
        });
        it("returns positive from controller", function(done) {
            assert.equal(controller.isPalindrome("a man a plan a canal panama"), true);
            done();
        });
      });

      context('when the word is a palindrome', function() {
        it("returns status code 200 from URL", function(done) {
          request.get(url+'/aba', function(error, response, body) {
            assert.equal(response.statusCode, 200);
            done();
          });
        });
        it("returns positive from controller", function(done) {
            assert.equal(controller.isPalindrome("aba"), true);
            done();
        });
      });

      context('when the sentence is not a palindrome', function() {
        it("returns status code 400", function(done) {
          request.get(url+'/is not a palindrome', function(error, response, body) {
            assert.equal(response.statusCode, 400);
            done();
          });
        });
        it("returns negative from controller", function(done) {
            assert.equal(controller.isPalindrome("is not a palindrome"), false);
            done();
        });
      });

      context('when the word is not a palindrome', function() {
        it("returns status code 400", function(done) {
          request.get(url+'/palindrome', function(error, response, body) {
            assert.equal(response.statusCode, 400);
            done();
          });
        });
        it("returns negative from controller", function(done) {
            assert.equal(controller.isPalindrome("palindrome"), false);
            done();
        });
      });
    });
  });
