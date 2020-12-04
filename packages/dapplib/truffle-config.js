require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture struggle raise still hope install nature metal giant'; 
let testAccounts = [
"0xa347ecfb0f18f49fa93d86db6a025c36bd75c43cf6da7c2937458a4bb9fac787",
"0xe341df6701254855bee9275f28d94f8fe5c0f9aea5dedb0f748d641d3f152a87",
"0x111caad2f4f1ce4629c7d31d0c10a338749f770d86b970c9fd58c748bedef4e7",
"0x99b94b0dde0de3bc4aaaf8573d392bc9ab3225a31cc099d60d79539aee8f6261",
"0x571cf0e0237165d1d2811d2e183537365b11c75e3976a5abce98dd005fd277c2",
"0x3f458e0ce4f4877451c0f7770cb13aef497c40f1001c8f499a1941388e365eff",
"0xe8c22ee77bc93590157bfe397410a9129065b275df954c286b6f5443f02b94bc",
"0xcdd3a2be3779fd74cc6f6e45fbd3e26e71c504b9d93177e866772315d94fa208",
"0xf32b877d226c375d2e9745115828dc363e5063dd74452e8694758b408cfbbc35",
"0x91115f526b78a6d0eb8aef9e1f0149381b694b794ff77e571300da5d986eb756"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
