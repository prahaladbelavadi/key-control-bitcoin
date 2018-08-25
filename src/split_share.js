secrets = require('secrets.js-grempe')

var wif = 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1';
// var key = wif.

var key = secrets.random(128)

console.log(key);

var shares_arr = secrets.share(key,5,3)

console.log(shares_arr);


var reconstruct = secrets.combine(shares_arr.splice(0,3))
console.log(reconstruct);

function verify(reconstruct, key){
  if(reconstruct == key){
    console.log(' true')
  }else{
    console.log(' false')
  }
}

verify(key, reconstruct)
