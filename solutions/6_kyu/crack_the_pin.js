const crypto = require('crypto');

function crack(hash) {
  for (let i = 0; i < 100000; i++) {
    const pin = ("" + i).padStart(5, '0');
    
    if (crypto.createHash('md5').update(pin).digest('hex') === hash) {
      return pin;
    }
  }
}