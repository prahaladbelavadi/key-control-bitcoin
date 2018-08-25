bitcoinjs = require("bitcoinjs-lib")

bip39 = require("bip39")
bitcoin = bitcoinjs

function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

const keyPair = bitcoin.ECPair.makeRandom({ rng: rng })
const wif = keyPair.toWIF()
console.log('WIF:',wif);

const mnemonic = bip39.entropyToMnemonic(rng())
// console.log('mnemonic:',mnemonic, '\n');

// console.log(bip39.mnemonicToEntropy(mnemonic));

exports.mnemonic = mnemonic;
exports.keyPair = keyPair;
exports.wif = wif;
