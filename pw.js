const bcrypt = require('bcrypt');

bcrypt.hash('myPassword', 10, function(err, hash) {
    console.log(hash);
    bcrypt.compare('myPassword', hash, function(err, res) {
      if(res) {
       console.log('match');
      } else {
       console.log('no match');
      }
    });
});

