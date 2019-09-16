const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require('./build/CampaignFactory.json');
require('dotenv').config({path: '../.env'});

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  'https://rinkeby.infura.io/v3/' + process.env.RINKEBY_API
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting deploy from account:', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to:', result.options.address)
}
deploy();