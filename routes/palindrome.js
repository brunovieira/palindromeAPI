var controller = require('../controllers/palindrome');

module.exports = function(server){
	server.get({path: '/verifyPalindrome/:palindrome', name: 'palindrome-get'}, controller.verify);
};
