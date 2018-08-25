secrets = require('secrets.js-grempe')
createHash = require("create-hash")

function checksum(input){
  return createHash('sha256').update(Buffer.from(input)).digest()
}


var wif = 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1';
// var key = wif.

var key = secrets.random(256)

console.log('key',key);

var shares_arr = secrets.share(key,5,3)

console.log(shares_arr);

function share_checksum(share_arr){
  var checksumArray = [];
  for (var i=0 ; i < shares_arr.length ; i++){
    check = checksum(Buffer.from(i));
    checksumArray.push(checks);
  };
  return checksumArray;
}

share_checksum(shares_arr)

var reconstruct = secrets.combine(shares_arr.splice(0,3))
console.log('reconstructed key', reconstruct);

function verify(reconstruct, key){
  if(reconstruct == key){
    console.log(' true')
  }else{
    console.log(' false')
  }
}

verify(key, reconstruct)


module.exports = {
  reconstruct,
  verify
}
