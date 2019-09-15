// Web3 is a collection of libraries
// and it is a portal to see what's going on a local test network
// which is create by Ganache cli

const assert = require('assert');
const ganache = require('ganache-cli'); // serves a local test network
const Web3 = require('web3'); // is a constructor // should use v1
const web3 = new Web3(ganache.provider()); // is an instance of Web3
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; // 10 accounts in this local test network
let factory;
let CampaignAddress;
let campaign;

beforeEach(async () => {
  // ganache will provide 10 account networks by default
  // an account will be used for deploying a contract to a local test network
  accounts = await web3.eth.getAccounts();

  // creating a new contract instance for deploying it to a local network
  // the first line returns a contract instance

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100')
    .send({ from: accounts[0], gas: '1000000' });

  // the first element of the array will be stored
  
  // The acronym ABI stands for Application Binary Interface.
  // A smart contract is stored as bytecode (= binary data) into 
  // the blockchain under a specific address also known as contract address. 
  // The ABI is needed to access the bytecode.

  [CampaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    CampaignAddress
  );
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();

    // the 1st argument: hoping value
    // the 2nd one: actual value
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and marks them as contributers', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('buy orange', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const request = await campaign.methods.requests(0).call();
    assert.equal('buy orange', request.description);
  });

  it('processes requests', async() => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104)
  });
});