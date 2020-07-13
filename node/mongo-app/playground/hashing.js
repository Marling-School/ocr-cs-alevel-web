const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`)
console.log(`Hash: ${hash}`)

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// Man in the middle
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

console.log(`Token: ${JSON.stringify(token)}`)
if (resultHash == token.hash) {
  console.log('Data was not changed')
} else {
  console.log('Data was changed...AWOOGA, AWOOGA')
}
