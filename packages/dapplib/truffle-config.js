require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift razor tortoise color harvest light army gas'; 
let testAccounts = [
"0xb0636d01bd2cca6490c638421d128a85114872b848a8e6aee6bdf8fb0429713d",
"0x7bbc71a9a20c96de0ba4590f48decdc8e5c28fdaa00c68e8ed13045565f0b8df",
"0xdac2ab51be164317fe8ba7336b69457ad484a992a5af425df75cb35fedb57324",
"0xd02d0df43f5690c50248a7908137e9614027c1e1cef4a5253576f9c1f365518a",
"0x8d15c560a9ac3a79572a68272e4df3d8387db304055f9ecc87f8d4c9662d5866",
"0x33f63dd451d2a74e6877eef655e35d7744c89032e7abf6683f57d6b50b875c12",
"0x6092e348c5e99ee4a03cbabe3f659154c8b8e0130d6e47e47a34764b8f3b14ab",
"0xfe2ad0980b5294405f282e4c36d553bde29c7df9d0b22edeaf715faef25f5830",
"0xb05fb2f60a14588d4a466539ca45735144e1bc5a2a5f022e141caaef646cdf62",
"0x712f5d83bdd0fa35a61968188d141a0373f5e060f6cb2d0e509af338252b4e4e"
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
            version: '^0.8.0'
        }
    }
};

