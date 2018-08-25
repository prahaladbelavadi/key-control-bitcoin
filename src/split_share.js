secrets = require('secrets.js-grempe')
createHash = require("create-hash")

function checksum(input){
  return createHash('sha256').update(Buffer.from(input)).digest()
}
var total_shares = 5;
var threshold = 3;

var wif = 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1';
// var key = wif.

console.log('Total Number of Shares:',total_shares,'\n','Threshold:',threshold);

var key = secrets.random(256)
var keyChecksum = checksum(key)
console.log('key',key,'\n','keyChecksum:',keyChecksum.toString('hex'));

var shares_arr = secrets.share(key,total_shares, threshold)

console.log(shares_arr,'\n');

function share_checksum(share_arr){
  var checksumArray = [];
  for (var i=0 ; i < shares_arr.length ; i++){
    checks = checksum(share_arr[i]);//checksum(bufferi);
    checksumArray.push(checks.toString('hex'));
  };
  return checksumArray;
}

console.log(share_checksum(shares_arr));

var reconstruct = (secrets.combine(shares_arr.splice(0,3)));
console.log('reconstructed key', reconstruct);

var reconstructChecksum = checksum(reconstruct)

function verify(reconstructChecksum, keyChecksum){
  if(reconstruct === key){
    console.log(' true')
    console.log(reconstruct,'\n',key);
  }else{
    console.log(' false')
    console.log(reconstruct,'\n',key);

  }
}

verify(reconstructChecksum.toString('hex'), keyChecksum.toString('hex'))

module.exports = {
  reconstruct,
  verify
}
