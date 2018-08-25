bitcoinjs = require('bitcoinjs-lib');
mnemonic = require("./mnemonic.js")

// console.log(mnemonic.keyPair);
const pubkey = mnemonic.keyPair.publicKey
console.log('PublicKey:',pubkey.toString('hex'));

console.log('WIF:',mnemonic.wif);

console.log('wifChecksum',wifChecksum)
console.log('Shares Checksum Array:', wif_split_checksum_arr(wif_split))
console.log('recombine shares checksum:', recomb_checksum)

function combination_status(wifChecksum, recomb_checksum){
  if (wifChecksum === recomb_checksum){
    return true
  }else{
    false
  }
}

function shareMatch(share){
  shareChecksum = sha256(share)
  for (var i=0, i < wif_split_checksum_arr.length(), i++){
    if (shareChecksum === i){
      return true
    }else {
      return false
    }
  }
}

// bitcoinjs.toWIF(mnemonic.keyPair).toString('hex')
// console.log(toWif().toString('hex'));


// const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
//
// var alice = bitcoin.ECPair.fromWIF('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy')
// var txb = new bitcoin.TransactionBuilder()
//
// // Fees are not specified, the difference of the input and output is taken by miner as fees
// txb.addInput('61d520ccb74288c96bc1a2b20ea1c0d5a704776dd0164a396efec3ea7040349d', 0) // Alice's previous transaction output, has 15000 satoshis
// txb.addOutput('1cMh228HTCiwS8ZsaakH8A8wze1JR5ZsP', 12000)
// // (in)15000 - (out)12000 = (fee)3000, this is the miner fee
//
// // console.log(txb);
//
// txb.sign(0, alice)
// // Alice to sign her transaction
//
// // convert transaction to hex and prepare to broadcast it to bitcoin network
// console.log( 'Transaction to be broadcasted to Bitcoin network in hex format :'+'\n'+txb.build().toHex())
