bitcoinjs = require("bitcoinjs-lib")
bip39 = require("bip39")
createHash = require("create-hash")

bitcoin = bitcoinjs

function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

const keyPair = bitcoin.ECPair.makeRandom({ rng: rng })
const wif = keyPair.toWIF();


const mnemonic = bip39.entropyToMnemonic(rng())
// console.log('mnemonic:',mnemonic, '\n');
// console.log(bip39.mnemonicToEntropy(mnemonic));

  function sha256 (buffer) {
    return createHash('sha256').update(buffer).digest()
  }

  const wifChecksum = sha256(Buffer.from(wif))
  console.log('wifChecksum:',wifChecksum.toString('hex'));
  console.log('WIF:',wif);
  

exports.mnemonic = mnemonic;
exports.keyPair = keyPair;
exports.wif = wif;
exports.wifChecksum = wifChecksum;
