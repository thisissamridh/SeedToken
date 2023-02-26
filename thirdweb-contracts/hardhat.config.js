/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'mumbai',
    networks: {
      mumbai: {
        url:'https://polygon-mumbai.g.alchemy.com/v2/Ch4l3o1qXehh7z77F_tFYFKO-IAtU0i8',
        accounts: [`0x${process.env.PRIVATE_KEY}`], 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
