
var PalindromeController = {

	isPalindrome: function (palindrome) {
		var originalSentence = palindrome.replace(/\s+/g, '').toUpperCase();
		var reverseSentence = originalSentence.split('').reverse().join('').toUpperCase();
		return originalSentence === reverseSentence;
	},

	verify: function(req, res, next) {
			if(req.params.palindrome && PalindromeController.isPalindrome(req.params.palindrome)) {
				res.send(200, { success: true, message: 'It is a Palindrome.' });
			} else {
				res.send(400, { success: false, message: 'It is not a Palindrome.' });
			}
	  	next();
	}
};

module.exports = PalindromeController;
