require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0P2yvw5kt20_hzfo6wMn_ga7dTqgDNyN',
      accounts: ['d19e5514cdb02b065005f226d80e73c00808e646a9c7c7e68776115dcb79cd0f'],
    },
  },
};